import { useCallback, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import type { Testimonial as TestimonialType } from 'data/landing/homepage';
import { useBreakpoints } from 'providers/BreakpointsProvider';
import { SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper/types';
import IconifyIcon from 'components/base/IconifyIcon';
import Image from 'components/base/Image';
import Swiper from 'components/base/Swiper';
import SectionHeader from '../common/SectionHeader';
import { doubleFadedStyle } from '../common/styles';

const Testimonial = ({ data }: { data: TestimonialType[] }) => {
  const { up } = useBreakpoints();
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const upSm = up('sm');
  const upMd = up('md');

  const onSlideChange = useCallback((swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
    swiper.snapGrid = [...swiper.slidesGrid];
  }, []);

  return (
    <Paper sx={{ p: { xs: 3, md: 5 }, outline: 0 }}>
      <SectionHeader
        title="Testimonial"
        subtitle="Hear what our clients have to say about us"
        sx={{ mb: 3 }}
      />
      <Stack
        sx={{
          alignItems: 'center',
          position: 'relative',
        }}
      >
        <Button
          ref={prevRef}
          color="neutral"
          variant="soft"
          sx={{ p: 1, minWidth: 0, flexShrink: 0 }}
        >
          <IconifyIcon
            icon="material-symbols:chevron-left-rounded"
            sx={(theme) => ({
              fontSize: 20,
              transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
            })}
          />
        </Button>
        <Button
          ref={nextRef}
          color="neutral"
          variant="soft"
          sx={{ p: 1, minWidth: 0, flexShrink: 0, order: 1 }}
        >
          <IconifyIcon
            icon="material-symbols:chevron-right-rounded"
            sx={(theme) => ({
              fontSize: 20,
              transform: theme.direction === 'rtl' ? 'rotate(180deg)' : 'none',
            })}
          />
        </Button>

        <Swiper
          slidesPerView={upSm ? 'auto' : 1}
          spaceBetween={32}
          loop
          centeredSlides
          navigation={{ prevEl: prevRef, nextEl: nextRef }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={onSlideChange}
          sx={{
            overflow: 'hidden',
            '& .swiper-slide': { width: { xs: 1, sm: 'auto' }, boxSizing: 'border-box' },
            '& .swiper-wrapper': { overflow: 'visible', py: 10, alignItems: 'center' },
            ...doubleFadedStyle(upMd ? 15 : 0, upMd ? 85 : 100),
          }}
        >
          {data.map((item, i) => (
            <SwiperSlide key={i}>
              <Stack sx={{ width: 1, justifyContent: 'center' }}>
                <TestimonialCard item={item} isActive={activeIndex === i} />
              </Stack>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </Paper>
  );
};

export default Testimonial;

const TestimonialCard = ({ item, isActive }: { item: TestimonialType; isActive?: boolean }) => {
  const { typography } = useTheme();
  const { up } = useBreakpoints();
  const upSm = up('sm');

  return (
    <Paper
      background={1}
      elevation={0}
      variant="elevation"
      sx={{
        p: { xs: 2, sm: 3, md: 5 },
        borderRadius: 6,
        width: { xs: 1, sm: 480, md: 600 },
        position: 'relative',
        overflow: 'visible',
      }}
    >
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        gap={{ xs: 2, sm: 3, md: 4 }}
        sx={{ height: 1 }}
      >
        <Box
          sx={{
            transform: isActive ? 'rotate(4deg)' : 'rotate(-4deg)',
            transition: 'transform 0.3s ease-in-out',
            width: { xs: 150, sm: 203 },
            height: { xs: 150, sm: 270 },
            borderRadius: 2,
            marginTop: { xs: -10 },
            overflow: 'hidden',
            boxShadow: 3,
          }}
        >
          <Image
            src={item.img}
            sx={{
              width: 1,
              height: 1,
              objectFit: 'cover',
              filter: 'grayscale(100%)',
            }}
          />
        </Box>

        <Stack
          direction="column"
          gap={{ xs: 1, sm: 2, md: 3 }}
          sx={{ flexGrow: 1, flexBasis: { xs: '0%', sm: '60%' } }}
        >
          <Rating
            readOnly
            name="testimonal-rating"
            value={item.rating}
            size={upSm ? 'large' : 'medium'}
          />

          <Typography
            variant="h6"
            sx={{
              textWrap: 'pretty',
              fontSize: { xs: typography.subtitle1.fontSize, sm: typography.h6.fontSize },
            }}
          >
            {item.review}
          </Typography>

          <Stack direction="column" gap={1}>
            <Typography variant="subtitle2" color="textSecondary">
              {item.name}
            </Typography>
            <Typography variant="subtitle2" color="textDisabled">
              {item.company}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};
