import { Typography, Link } from '@material-ui/core'

export default function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://beautybar-salon.com">
        BeautyBar
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  )
}
