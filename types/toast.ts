export interface Toast {
  id: number;
  show: boolean;
  removing: boolean;
  description: string;
  type: "success" | "alert";
  timeoutId?: NodeJS.Timeout;
}
