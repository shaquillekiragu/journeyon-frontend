export interface Milestone {
  id: number;
  title: string;
  description: string;
  courseId: number;
  createdAt: string;
}

export interface MilestoneProgress {
  Milestone: Milestone;
  Status: "completed" | "in-progress" | "not-started";
  CompletedAt?: string;
}

export interface HorizontalTimelineProps {
  milestones?: MilestoneProgress[];
  userId?: number;
}
