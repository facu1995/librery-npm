export interface TicketStatus {
  beClosed: boolean;
  id: number;
  name: string;
  supportCenterName: string;
}

export interface TicketDescription {
  content: {};
  type: string;
  version: number;
}

export interface Ticket {
  created: string;
  description: TicketDescription;
  id: number;
  issueType: string;
  key: string;
  status: TicketStatus;
  summary: string;
  updated: string;
}

export interface CloseTicket {
  id: string;
  summary: string;
  open: boolean;
}
