import Skeleton from 'components/skeleton'
import { Box } from '@ui'

const StorySkeleton = ({ q = 1 }: { q?: number }) => (
  <>
    {Array.from({ length: q }, (_, i) => i).map((i) => (
      <Box key={i} align={['left', 'center']}>
        <Skeleton height={80} width={150} />
        <Box column width='100%' spacing={{ml: 1}} gap={10}>
          <Skeleton height={20} />
          <Skeleton height={20} />
        </Box>
      </Box>
    ))}
  </>
)

export default StorySkeleton
