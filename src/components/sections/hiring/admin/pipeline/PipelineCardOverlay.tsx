import { PipelineItem } from 'types/hiring';

interface PipelineCardOverlayProps {
  pipeline: PipelineItem;
}

const PipelineCardOverlay = ({ pipeline }: PipelineCardOverlayProps) => {
  return <div key={pipeline.id}>PipelineCardOverlay</div>;
};

export default PipelineCardOverlay;
