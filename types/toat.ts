export interface Toast {
  id: number;
  show: boolean;
  description: string;
  timeoutId: NodeJS.Timeout | null;
}
