import Mock from 'mockjs'
import img1 from '@/assets/images/02_03.jpg'
import img2 from '@/assets/images/02_04.jpg'
const carousel = Mock.mock({
  'banImg|3': [
    {
      'url|1': [img1, img2],
      'id|+1': 0
    }
  ]
})
export default carousel
