import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  accordionSummaryClasses,
} from '@mui/material';
import type { FAQ } from 'data/landing/homepage';
import SectionHeader from '../common/SectionHeader';

const FAQSection = ({ data }: { data: FAQ[] }) => {
  return (
    <Box sx={{ px: { xs: 3, md: 5 }, py: 5 }}>
      <SectionHeader title="FAQ" subtitle="Here are some common enquiries we face" sx={{ mb: 3 }} />

      <Container maxWidth={false} sx={{ maxWidth: 582, px: { xs: 0 } }}>
        {data.map((item, i) => (
          <Accordion key={i} defaultExpanded={i === 0}>
            <AccordionSummary
              sx={{
                [`& .${accordionSummaryClasses.content}`]: {
                  fontSize: 16,
                },
              }}
            >
              {item.summary}
            </AccordionSummary>

            <AccordionDetails sx={{ fontWeight: 500 }}>{item.details}</AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
};

export default FAQSection;
