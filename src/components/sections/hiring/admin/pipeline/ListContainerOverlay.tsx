import { PipelineList } from 'types/hiring';

interface ListContainerOverlayProps {
  list: PipelineList;
}

const ListContainerOverlay = ({ list }: ListContainerOverlayProps) => {
  return <div key={list.id}>ListContainerOverlay</div>;
};

export default ListContainerOverlay;
