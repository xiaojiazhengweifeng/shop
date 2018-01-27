import Mock from 'mockjs'
import img1 from '@/assets/images/02_03.jpg'
import img2 from '@/assets/images/02_04.jpg'
const shoplist = Mock.mock({
  'list|3': [
    {
      'url|1': [img1, img2],
      'title|1': [
        '百味草',
        '九龙斋酸梅汤',
        '麻辣香锅',
        '过桥米线'
      ],
      'count|1': [
        1,
        2,
        3,
        4
      ],
      'cancel': '-',
      'plus': '+',
      'simpledescript|1': [
        '合肥后方可杰弗',
        '开发福建省口附近',
        '不能加防腐剂深v',
        '如何付款耸了耸肩'
      ],
      'moredescript|1': [
        '鹤骨鸡肤代收款思考和贵金属尽快发军绿色聚划算款回复看到了发动机和罚款饭店会尽快送很费劲的卡萨来的花家地',
        '啊快乐健康kldsjfkd富士康了几声空间的寄快递就付款尽快快疯了睡觉了付款会计法 lkj',
        '富贵花开落实会计师就厉害付款就火锅方脑壳脚后跟咖啡店考虑是否很快乐 给快捷连锁 里面麦乐送木卡姆',
        '如我侏加号路径经济法及格发货快乐是解放军打开尽快付款就基督教剪短发了肯定看了年房价是多少脑袋上了付款'
      ],
      'evaluate|1': [
        '好',
        '很好',
        '非常好',
        '差评'
      ],
      'price|1': [
        9.9,
        11.11,
        10.9
      ],
      'discount|1': [
        '满30减20',
        '满50减40',
        '满49送10',
        '满100打八折'
      ],
      'morediscount|1': [
        [
          {
            key: 1,
            discount: '满30减20'
          },
          {
            key: 2,
            discount: '满50减40'
          }
        ],
        [
          {
            key: 3,
            discount: '满100打八折'
          },
          {
            key: 4,
            discount: '满200打五折'
          }
        ]
      ],
      'id|+1': 0,
      'num': 0
    }
  ]
})
export default shoplist
