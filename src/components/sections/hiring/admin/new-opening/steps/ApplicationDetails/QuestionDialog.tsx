import { useEffect, useState } from 'react';
import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  FormControlLabel,
  FormHelperText,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  dialogClasses,
} from '@mui/material';
import { Question } from 'types/hiring';
import IconifyIcon from 'components/base/IconifyIcon';

interface QuestionDialogProps {
  open: boolean;
  onClose: () => void;
  onSave: (value: Question) => void;
  initialValue?: Question;
}

const responseOptions: Record<string, string[]> = {
  'pre-screen': ['Paragraph', 'Multiple Choice', 'Text', 'Checkbox'],
  'video-response': ['Max 1 min', 'Max 2 min', 'Max 5 min'],
};

const QuestionDialog = ({ open, onClose, onSave, initialValue }: QuestionDialogProps) => {
  const [question, setQuestion] = useState('');
  const [description, setDescription] = useState('');
  const [format, setFormat] = useState('');
  const [responseType, setResponseType] = useState('');
  const [isMandatory, setIsMandatory] = useState(false);

  useEffect(() => {
    if (open) {
      setQuestion(initialValue?.question ?? '');
      setDescription(initialValue?.description ?? '');
      setFormat(initialValue?.format ?? '');
      setResponseType(initialValue?.responseType ?? '');
      setIsMandatory(initialValue?.isMandatory ?? false);
    }
  }, [open, initialValue]);

  const handleConfirm = () => {
    onSave({
      question,
      description,
      format,
      responseType,
      isMandatory,
    });
    // clear on add (not edit)
    if (!initialValue) {
      setQuestion('');
      setDescription('');
      setFormat('');
      setResponseType('');
      setIsMandatory(false);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll="body"
      maxWidth={false}
      sx={{
        [`& .${dialogClasses.paper}`]: {
          borderRadius: 6,
          overflow: 'visible',
          maxWidth: 540,
        },
      }}
    >
      <DialogTitle
        component="h6"
        sx={{
          pt: 5,
          px: 5,
          pb: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {initialValue ? 'Edit Question' : 'Add Question'}
        <IconButton onClick={onClose}>
          <IconifyIcon icon="material-symbols:close" sx={{ fontSize: 20, color: 'neutral.dark' }} />
        </IconButton>
      </DialogTitle>
      <DialogContent sx={{ pb: 0.125, px: 5 }}>
        <DialogContentText variant="body2" sx={{ color: 'text.secondary', mb: 3 }}>
          Add a question to collect specific details from candidates when they submit a request.
        </DialogContentText>
        <TextField
          fullWidth
          label="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          sx={{ mb: 1 }}
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mb: 3 }}
        />
        <Stack gap={2} alignItems="center">
          <Stack gap={1} alignItems="center" width={1}>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="screening-format-label">Screening Format</InputLabel>
              <Select
                labelId="screening-format-label"
                value={format}
                onChange={(e) => {
                  setFormat(e.target.value);
                  setResponseType('');
                }}
              >
                <MenuItem value="pre-screen">Pre-Screen</MenuItem>
                <MenuItem value="video-response">Video Response</MenuItem>
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
            <FormControl variant="filled" fullWidth>
              <InputLabel id="response-type-label">Response Type</InputLabel>
              <Select
                labelId="response-type-label"
                value={responseType}
                onChange={(e) => setResponseType(e.target.value)}
                disabled={!format}
              >
                {format &&
                  responseOptions[format].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
              </Select>
              <FormHelperText></FormHelperText>
            </FormControl>
          </Stack>
          <FormControlLabel
            control={
              <Checkbox checked={isMandatory} onChange={(e) => setIsMandatory(e.target.checked)} />
            }
            label="Required"
          />
        </Stack>
      </DialogContent>
      <DialogActions
        sx={{
          p: 5,
          pt: 3,
        }}
      >
        <Button variant="soft" color="neutral" onClick={onClose}>
          Discard
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          {initialValue ? 'Update' : 'Save'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuestionDialog;
