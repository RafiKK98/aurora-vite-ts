import { useState } from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Question } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';
import QuestionItem from './Question';
import QuestionDialog from './QuestionDialog';

const initialQuestions: Question[] = [
  { isMandatory: false, question: 'Why did you choose to apply to this company?' },
  { isMandatory: false, question: 'What are your greatest strengths?' },
  { isMandatory: false, question: 'How do you prefer to work on tasks?' },
  { isMandatory: false, question: 'Have you worked remotely before?' },
];

const Questionaries = () => {
  const [open, setOpen] = useState(false);
  const [questions, setQuestions] = useState<Question[]>(initialQuestions);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const handleOpenAdd = () => {
    setEditingIndex(null);
    setOpen(true);
  };

  const handleOpenEdit = (index: number) => {
    setEditingIndex(index);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (value: Question) => {
    if (editingIndex !== null) {
      const updated = [...questions];
      updated[editingIndex] = value;
      setQuestions(updated);
    } else setQuestions([...questions, value]);

    handleClose();
  };

  return (
    <>
      <Typography fontWeight={600} mb={2}>
        Questionaries
      </Typography>
      <Stack direction="column" gap={1} mb={2}>
        {questions.map((q, index) => (
          <QuestionItem key={index} question={q} onEdit={() => handleOpenEdit(index)} />
        ))}
      </Stack>
      <Button onClick={handleOpenAdd} startIcon={<IconifyIcon icon="material-symbols:add" />}>
        Add Question
      </Button>

      <QuestionDialog
        open={open}
        onClose={handleClose}
        onSave={handleSave}
        initialValue={editingIndex !== null ? questions[editingIndex] : undefined}
      />
    </>
  );
};

export default Questionaries;
