type TrackDailyRoutinePropType = {
  trackSlugID: string;
};

type TrackDailyRoutineType =
  | {
      slugID: string;
      trackDisplayTitle: string;
      trackDisplayDescription: string;
      trackDailyRoutineTimeline: {
        workingDays: {
          startingWorkDay:
            | 'Monday'
            | 'Tuesday'
            | 'Wednesday'
            | 'Thursday'
            | 'Friday'
            | 'Saturday'
            | 'Sunday'
            | string;
          endingWorkDay:
            | 'Monday'
            | 'Tuesday'
            | 'Wednesday'
            | 'Thursday'
            | 'Friday'
            | 'Saturday'
            | 'Sunday'
            | string;
          flow:
            | {
                slotTitle: string;
                slotDescription: string;
                timestamp: string;
              }[]
            | {};
        };
      };
    }
  | undefined;

export type { TrackDailyRoutineType, TrackDailyRoutinePropType };
