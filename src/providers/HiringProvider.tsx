import {
  Context,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  use,
  useState,
} from 'react';
import { jobList } from 'data/hiring/candidate';
import type { Job } from 'types/hiring';

interface HiringContextProps {
  job: Job | null;
  setJob: Dispatch<SetStateAction<Job | null>>;
  candidate: {
    jobs: Job[];
  };
}

export const HiringContext: Context<HiringContextProps> = createContext({});

const HiringProvider = ({ children }: PropsWithChildren) => {
  const [job, setJob] = useState<Job | null>(jobList[2]);
  return (
    <HiringContext
      value={{
        job,
        setJob,
        candidate: { jobs: jobList },
      }}
    >
      {children}
    </HiringContext>
  );
};

export default HiringProvider;

export const useHiringContext = () => use(HiringContext);
