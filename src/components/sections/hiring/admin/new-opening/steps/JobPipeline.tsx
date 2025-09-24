import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Step from '@mui/material/Step';
import { stepIconClasses } from '@mui/material/StepIcon';
import StepLabel, { stepLabelClasses } from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import { StepType } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';
import StyledTextField from 'components/styled/StyledTextField';

const initialSteps: StepType[] = [
  { isMandatory: true, label: 'Received Applications' },
  { isMandatory: false, label: 'Reviewed' },
  { isMandatory: false, label: 'Schedule Mobile Screening' },
  { isMandatory: false, label: 'Mobile Screening' },
  { isMandatory: true, label: 'Job Offer' },
  { isMandatory: true, label: 'Hired' },
];

const JobPipeline = () => {
  const [steps, setSteps] = useState<StepType[]>(initialSteps);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [tempLabel, setTempLabel] = useState('');
  const [adding, setAdding] = useState(false);
  const [newLabel, setNewLabel] = useState('');

  const handleEdit = (index: number, currentLabel: string) => {
    setEditingIndex(index);
    setTempLabel(currentLabel);
  };

  const saveEdit = (index: number) => {
    if (!tempLabel.trim()) return cancelEdit();
    const updated = [...steps];
    updated[index].label = tempLabel;
    setSteps(updated);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
    setTempLabel('');
  };

  const handleAddStep = () => {
    if (!newLabel.trim()) {
      setAdding(false);
      return;
    }
    const insertIndex = steps.findIndex((s) => s.label === 'Mobile Screening');
    const updated = [...steps];
    updated.splice(insertIndex + 1, 0, { isMandatory: false, label: newLabel });
    setSteps(updated);
    setNewLabel('');
    setAdding(false);
  };

  return (
    <Stack direction="column" gap={2}>
      <Stepper orientation="vertical">
        {steps.map(({ label, isMandatory }, index) => (
          <Step key={index}>
            <StepLabel
              sx={({ vars }) => ({
                [`& .${stepLabelClasses.iconContainer}`]: {
                  '& svg': {
                    fill: isMandatory
                      ? vars.palette.background.elevation3
                      : vars.palette.chBlue[100],
                    [`& .${stepIconClasses.text}`]: {
                      fill: isMandatory
                        ? `${vars.palette.text.primary} !important`
                        : `${vars.palette.primary.dark} !important`,
                    },
                  },
                },
                [`& .${stepLabelClasses.labelContainer}`]: {
                  py: 0.5,
                  px: 2,
                  borderRadius: 2,
                  bgcolor: 'background.elevation1',
                },
                [`& .${stepLabelClasses.label}`]: {
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                },
              })}
            >
              {editingIndex === index ? (
                <StyledTextField
                  size="small"
                  value={tempLabel}
                  onChange={(e) => setTempLabel(e.target.value)}
                  onBlur={cancelEdit}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') saveEdit(index);
                    if (e.key === 'Escape') cancelEdit();
                  }}
                  autoFocus
                />
              ) : (
                <>
                  {label}
                  <Button
                    shape="square"
                    color="neutral"
                    size="small"
                    onClick={() => handleEdit(index, label)}
                  >
                    <IconifyIcon icon="material-symbols:more-horiz" sx={{ fontSize: 18 }} />
                  </Button>
                </>
              )}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      {adding ? (
        <StyledTextField
          size="small"
          placeholder="New step name"
          value={newLabel}
          onChange={(e) => setNewLabel(e.target.value)}
          onBlur={() => setAdding(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') handleAddStep();
            if (e.key === 'Escape') setAdding(false);
          }}
          autoFocus
        />
      ) : (
        <Button
          startIcon={<IconifyIcon icon="material-symbols:add" />}
          sx={{ alignSelf: 'flex-start' }}
          onClick={() => setAdding(true)}
        >
          Add Step
        </Button>
      )}
    </Stack>
  );
};

export default JobPipeline;
