export default function Footer() {
  // Top section features
  const topFeatures = [
    {
      icon: "多",
      text: "品类齐全，轻松购物",
    },
    {
      icon: "快",
      text: "多仓直发，极速配送",
    },
    {
      icon: "好",
      text: "正品行货，精致服务",
    },
    {
      icon: "省",
      text: "天天低价，畅选无忧",
    },
  ];

  // Middle section - 5 columns
  const middleColumns = [
    {
      title: "购物指南",
      links: [
        "购物流程",
        "会员介绍",
        "生活旅行",
        "常见问题",
        "大家电",
        "联系客服",
      ],
    },
    {
      title: "配送方式",
      links: [
        "上门自提",
        "211限时达",
        "配送服务查询",
        "配送费收取标准",
      ],
    },
    {
      title: "支付方式",
      links: [
        "货到付款",
        "在线支付",
        "分期付款",
        "公司转账",
      ],
    },
    {
      title: "售后服务",
      links: [
        "售后政策",
        "价格保护",
        "退款说明",
        "返修/退换货",
        "取消订单",
      ],
    },
    {
      title: "特色服务",
      links: [
        "夺宝岛",
        "DIY装机",
        "延保服务",
        "京东E卡",
        "京东通信",
        "京鱼座智能",
      ],
    },
  ];

  // Bottom legal text rows
  const bottomRows = [
    "关于我们 | 联系我们 | 联系客服 | 合作招商 | 商家帮助 | 营销中心 | 手机京东 | 友情链接 | 销售联盟 | 京东社区 | 风险监测 | 质量公告 | 隐私政策 | 京东公益 | Media & IR",
    "京公网安备 11000002000088号 | 京ICP备11041704号 | ICP | 药品医疗器械网络信息服务备案 | 自营医疗器械经营资质 | 药品网络交易第三方平台备案凭证 | 新出发京零 字第大120007号",
    "互联网出版许可证编号新出网证(京)字150号 | 出版物经营许可证 | 违法和不良信息举报电话:4006561155",
    "Copyright © 2004-2025 京东JINGDONG 版权所有 | 消费者维权热线:4006067733 | 经营证照 | 医疗器械第三方平台备案凭证(京)网械平台备字(2023)第00013号 | 营业执照 | 增值电信业务经营许可证",
    "京东旗下网站: 京东钱包 | 京东云 | 网络内容从业人员违法违规行为举报电话:4006561155-3",
  ];

  // Trust badges
  const trustBadges = [
    { icon: "", text: "可信网站 信用评价" },
    { icon: "", text: "网络警察 提醒您" },
    { icon: "", text: "诚信网站" },
    { icon: "", text: "网上有害信息举报专区" },
    { icon: "", text: "网络举报 APP下载" },
    { icon: "", text: "扫黄打非网 举报专区" },
    { icon: "", text: "适老化 无障碍服务" },
    { icon: "", text: "国家知识产权 公共服务网" },
  ];

  return (
    <footer className="w-full bg-[#f7f7fb] mt-4">
      <div className="max-w-[1600px] mx-auto px-4 py-12">
        {/* Top features section */}
        <div className="flex justify-center items-center gap-20 mb-8">
          {topFeatures.map((feature, index) => (
            <div key={index} className="flex items-center gap-4">
              {/* Icon placeholder - red hexagon with text */}
              <div className="w-10 h-10 border-3 border-[#e1251b] rounded-xl flex items-center justify-center text-[#e1251b] text-2xl font-bold shadow-sm">
                {feature.icon}
              </div>
              <span className="font-bold text-base">{feature.text}</span>
            </div>
          ))}
        </div>

        {/* Middle section - 5 columns, centered with tighter gaps */}
        <div className="border-t border-gray-200 pt-8 mb-8 flex justify-center">
          <div className="grid grid-cols-5 gap-x-20 gap-y-3">
            {middleColumns.map((column, colIndex) => (
              <div key={colIndex} className="min-w-[150px] flex flex-col items-center">
                <h3 className="font-semibold text-xs mb-2 text-gray-800 text-center">{column.title}</h3>
                <ul className="space-y-1">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="text-center">
                      <a
                        href="#"
                        className="text-gray-600 text-xs hover:text-[#e1251b] transition-colors cursor-pointer block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom legal text rows */}
        <div className="border-t border-gray-200 pt-3 mb-8">
          {bottomRows.map((row, index) => (
            <div
              key={index}
              className={
                (index === 0
                  ? "text-gray-700"
                  : "text-gray-400") +
                " text-xs text-center leading-6"
              }
            >
              {row.split(" | ").map((text, i, arr) => (
                <span key={i}>
                  <a
                    href="#"
                    className="hover:text-[#e1251b] transition-colors cursor-pointer"
                  >
                    {text}
                  </a>
                  {i < arr.length - 1 && (
                    <span className="mx-2 text-gray-300">|</span>
                  )}
                </span>
              ))}
            </div>
          ))}
        </div>

        {/* Trust badges section */}
        <div className="flex flex-wrap justify-center items-center gap-2">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center bg-gray-200 px-2 py-1 rounded-md">
              {/* Icon placeholder - will be replaced with actual icons later */}
              <span className="text-gray-600 text-xs">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

