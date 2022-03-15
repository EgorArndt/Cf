import _Skeleton, { SkeletonTheme, SkeletonProps } from 'react-loading-skeleton'

const Skeleton = ({ ...props }: SkeletonProps) => (
  <SkeletonTheme baseColor='#ebebeb' highlightColor='#f5f5f5'>
    <_Skeleton {...props} />
  </SkeletonTheme>
)

export default Skeleton
