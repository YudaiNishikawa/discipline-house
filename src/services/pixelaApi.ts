const PIXELA_API_BASE = '/api/pixela/users';

interface PixelaConfig {
  username: string;
  token: string;
  graphId: string;
}

interface PixelaResponse {
  isSuccess: boolean;
  message?: string;
}

export async function initializePixelaUser(config: PixelaConfig): Promise<PixelaResponse> {
  const response = await fetch(`${PIXELA_API_BASE}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      token: config.token,
      username: config.username,
      agreeTermsOfService: 'yes',
      notMinor: 'yes',
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return { isSuccess: false, message: error.message || 'Failed to create user' };
  }

  return { isSuccess: true };
}

export async function createGraph(config: PixelaConfig): Promise<PixelaResponse> {
  const response = await fetch(`${PIXELA_API_BASE}/${config.username}/graphs`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-TOKEN': config.token,
    },
    body: JSON.stringify({
      id: config.graphId,
      name: 'Discipline House',
      unit: 'point',
      type: 'int',
      color: 'sora',
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    return { isSuccess: false, message: error.message || 'Failed to create graph' };
  }

  return { isSuccess: true };
}

export async function incrementPixel(
  config: PixelaConfig,
  date: string,
  quantity: string
): Promise<PixelaResponse> {
  const response = await fetch(
    `${PIXELA_API_BASE}/${config.username}/graphs/${config.graphId}/${date}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'X-USER-TOKEN': config.token,
      },
      body: JSON.stringify({ quantity }),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    return { isSuccess: false, message: error.message || 'Failed to increment pixel' };
  }

  return { isSuccess: true };
}

export async function postPixel(
  config: PixelaConfig,
  date: string,
  quantity: string
): Promise<PixelaResponse> {
  const response = await fetch(`${PIXELA_API_BASE}/${config.username}/graphs/${config.graphId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-USER-TOKEN': config.token,
    },
    body: JSON.stringify({ date, quantity }),
  });

  if (!response.ok) {
    const error = await response.json();
    return { isSuccess: false, message: error.message || 'Failed to post pixel' };
  }

  return { isSuccess: true };
}

export interface PixelData {
  date: string;
  quantity: string;
}

export async function getPixels(config: PixelaConfig, fromDate: string, toDate: string): Promise<PixelData[]> {
  const response = await fetch(
    `${PIXELA_API_BASE}/${config.username}/graphs/${config.graphId}?from=${fromDate}&to=${toDate}`,
    {
      method: 'GET',
      headers: { 'X-USER-TOKEN': config.token },
    }
  );

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return data.pixels || [];
}

export async function getTodayPixels(config: PixelaConfig): Promise<number> {
  const today = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const response = await fetch(
    `${PIXELA_API_BASE}/${config.username}/graphs/${config.graphId}/${today}`,
    {
      method: 'GET',
      headers: { 'X-USER-TOKEN': config.token },
    }
  );

  if (!response.ok) {
    return 0;
  }

  const data = await response.json();
  return parseInt(data.quantity || '0', 10);
}
