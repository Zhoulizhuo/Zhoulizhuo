export type Copy = { en: string; zh: string };

export type CategoryId = "travel" | "convenience" | "balance";

export type InterestId =
  | "cabin-one"
  | "cabin-flat"
  | "slip"
  | "glide-12"
  | "glide-14"
  | "oem"
  | "other";

export const brand = {
  name: "Aerly",
  nameZh: "艾黎",
  email: "lili970@qq.com",
  tagline: {
    en: "Cabin-ready children's mobility",
    zh: "登机尺寸的儿童出行",
  } satisfies Copy,
};

export type Picture = {
  src: string;
  alt: Copy;
};

export type Spec = {
  label: Copy;
  value: Copy;
};

export type Product = {
  slug: InterestId;
  category: CategoryId;
  name: string;
  tagline: Copy;
  summary: Copy;
  story: Copy;
  highlights: Copy[];
  specs: Spec[];
  images: Picture[];
};

export const categories: {
  id: CategoryId;
  path: string;
  index: string;
  title: Copy;
  nav: Copy;
  lede: Copy;
  image: string;
  imageAlt: Copy;
}[] = [
  {
    id: "travel",
    path: "/travel",
    index: "01",
    title: { en: "Travel strollers", zh: "旅行推车" },
    nav: { en: "Travel", zh: "推车" },
    lede: {
      en: "Aluminum frames, a one-hand fold, and a package that sits beside cabin luggage.",
      zh: "铝合金车架，单手折叠，收好后的体积接近登机箱。",
    },
    image: "/images/cabin-open.jpg",
    imageAlt: {
      en: "Sage aluminum travel stroller in a studio",
      zh: "鼠尾草绿铝合金旅行推车",
    },
  },
  {
    id: "convenience",
    path: "/convenience",
    index: "02",
    title: { en: "Umbrella strollers", zh: "伞车" },
    nav: { en: "Umbrella", zh: "伞车" },
    lede: {
      en: "A slimmer fold for the boot, the hallway, and the days you are not flying.",
      zh: "更窄的伞折，留给后备箱、门厅，以及不出远门的日子。",
    },
    image: "/images/slip-open.jpg",
    imageAlt: {
      en: "Slim sage umbrella stroller",
      zh: "鼠尾草绿轻便伞车",
    },
  },
  {
    id: "balance",
    path: "/balance",
    index: "03",
    title: { en: "Balance bikes", zh: "平衡车" },
    nav: { en: "Balance", zh: "平衡车" },
    lede: {
      en: "No pedals. A low frame. The first two wheels, in sage or clay.",
      zh: "没有脚踏，低跨车架。孩子的第一辆两轮车，鼠尾草绿或陶土色。",
    },
    image: "/images/glide-bike.jpg",
    imageAlt: {
      en: "Sage children's balance bike",
      zh: "鼠尾草绿儿童平衡车",
    },
  },
];

const frame: Spec = {
  label: { en: "Frame", zh: "车架" },
  value: { en: "Aluminum", zh: "铝合金" },
};

export const products: Product[] = [
  {
    slug: "cabin-one",
    category: "travel",
    name: "Cabin One",
    tagline: {
      en: "The fold we draw next to a cabin suitcase.",
      zh: "我们拿登机箱来对照的那一款折叠。",
    },
    summary: {
      en: "A compact aluminum travel stroller with a one-hand fold, a self-standing package, and sage fabric.",
      zh: "铝合金旅行推车，单手折叠，收起后能自己站稳，座椅是鼠尾草绿。",
    },
    story: {
      en: "Cabin One is the reference model for the line. The fold is meant to stand on its own beside luggage, with a carry strap for gates and corridors. Airlines set their own bin rules, so the folded size should be checked against the ticket before a trip, and against the drawing before an order.",
      zh: "Cabin One 是这条产品线的基准款。折叠后可以靠自己站稳，肩带用来过安检和走廊桥。各航司的行李架规则并不相同，出行前要对照机票，下单前要对照图纸。",
    },
    highlights: [
      { en: "One-hand fold that stands alone", zh: "单手折叠，收起后自行站立" },
      { en: "Brushed aluminum frame", zh: "拉丝铝合金车架" },
      { en: "Carry strap for the terminal", zh: "航站楼用的手提带" },
      { en: "UPF 50+ canopy with a mesh window", zh: "UPF 50+ 遮阳篷，带网纱视窗" },
    ],
    specs: [
      frame,
      {
        label: { en: "Target weight", zh: "目标自重" },
        value: { en: "6.4 kg", zh: "6.4 kg" },
      },
      {
        label: { en: "Target folded size", zh: "目标折叠尺寸" },
        value: { en: "48 × 36 × 22 cm", zh: "48 × 36 × 22 cm" },
      },
      {
        label: { en: "Target open size", zh: "目标展开尺寸" },
        value: { en: "92 × 46 × 104 cm", zh: "92 × 46 × 104 cm" },
      },
      {
        label: { en: "Age guidance", zh: "年龄参考" },
        value: { en: "About 6 months to 4 years", zh: "约 6 个月至 4 岁" },
      },
      {
        label: { en: "Seat limit", zh: "座椅承重" },
        value: { en: "22 kg", zh: "22 kg" },
      },
      {
        label: { en: "Harness", zh: "安全带" },
        value: { en: "5-point", zh: "五点式" },
      },
      {
        label: { en: "Finish", zh: "配色" },
        value: { en: "Sage, cognac grip", zh: "鼠尾草绿，干邑色握把" },
      },
    ],
    images: [
      {
        src: "/images/cabin-open.jpg",
        alt: {
          en: "Cabin One travel stroller, open, sage fabric and aluminum frame",
          zh: "展开的 Cabin One 旅行推车，鼠尾草绿面料，铝合金车架",
        },
      },
      {
        src: "/images/cabin-folded.jpg",
        alt: {
          en: "Cabin One folded beside a cabin suitcase",
          zh: "折叠后的 Cabin One，旁边是一只登机箱",
        },
      },
      {
        src: "/images/hero-airport.jpg",
        alt: {
          en: "Cabin One standing in an airport beside a suitcase",
          zh: "Cabin One 放在机场，旁边是行李箱",
        },
      },
      {
        src: "/images/detail-hinge.jpg",
        alt: {
          en: "Close view of the aluminum hinge, sage fabric, and leather grip",
          zh: "铝合金铰链、鼠尾草绿面料和皮革握把的近景",
        },
      },
    ],
  },
  {
    slug: "cabin-flat",
    category: "travel",
    name: "Cabin Flat",
    tagline: {
      en: "The same travel idea, with a deeper recline.",
      zh: "同一套旅行思路，靠背可以放得更平。",
    },
    summary: {
      en: "A stone-colored travel stroller for buyers who need a near-flat rest position in the same aluminum family.",
      zh: "石色旅行推车，给需要近乎平躺休息位、又希望留在同一铝合金系列里的买家。",
    },
    story: {
      en: "Cabin Flat keeps the aluminum travel frame and shifts the seat. Fully reclined, it is the model we talk about for younger riders. Upright, it is still a day stroller. The exact recline angle belongs on the drawing, not in a slogan.",
      zh: "Cabin Flat 沿用铝合金旅行车架，改的是座椅。完全放倒时，我们把它当作更小月龄的方案；坐直时，它仍是日常推车。具体角度以图纸为准，不写进口号里。",
    },
    highlights: [
      { en: "Near-flat recline", zh: "近乎平躺的靠背" },
      { en: "Stone fabric, cognac grip", zh: "石色面料，干邑色握把" },
      { en: "Aluminum frame shared with the travel line", zh: "与旅行系列相同的铝合金车架" },
      { en: "Basket under the seat", zh: "座椅下方置物篮" },
    ],
    specs: [
      frame,
      {
        label: { en: "Target weight", zh: "目标自重" },
        value: { en: "6.8 kg", zh: "6.8 kg" },
      },
      {
        label: { en: "Target folded size", zh: "目标折叠尺寸" },
        value: { en: "50 × 44 × 25 cm", zh: "50 × 44 × 25 cm" },
      },
      {
        label: { en: "Recline", zh: "靠背" },
        value: { en: "Near-flat", zh: "近乎平躺" },
      },
      {
        label: { en: "Age guidance", zh: "年龄参考" },
        value: {
          en: "From birth when fully reclined, to about 4 years",
          zh: "完全放倒后可从出生起，至约 4 岁",
        },
      },
      {
        label: { en: "Seat limit", zh: "座椅承重" },
        value: { en: "22 kg", zh: "22 kg" },
      },
      {
        label: { en: "Finish", zh: "配色" },
        value: { en: "Stone, cognac grip", zh: "石色，干邑色握把" },
      },
    ],
    images: [
      {
        src: "/images/cabin-flat.jpg",
        alt: {
          en: "Cabin Flat travel stroller in stone fabric",
          zh: "石色面料的 Cabin Flat 旅行推车",
        },
      },
    ],
  },
  {
    slug: "slip",
    category: "convenience",
    name: "Slip",
    tagline: {
      en: "The umbrella fold, for days that stay on the ground.",
      zh: "伞折，给出不了远门的那些天。",
    },
    summary: {
      en: "A lighter convenience stroller. It folds narrow, like an umbrella, and stands in a hallway.",
      zh: "更轻的便携推车。像伞一样收成窄条，可以立在门厅里。",
    },
    story: {
      en: "Slip is not the overhead-bin model. It is the one that lives by the door: a thin aluminum frame, a short canopy, and a fold you can close with one hand on the way into a shop. Buyers who need cabin size should start with Cabin One.",
      zh: "Slip 不是头顶行李架那一款。它适合放在门口：细铝合金车架、短遮阳篷，进商店时一只手就能收起。如果买家要的是客舱尺寸，从 Cabin One 看起。",
    },
    highlights: [
      { en: "Umbrella fold, narrow when closed", zh: "伞折，收起后很窄" },
      { en: "Lighter aluminum tubes", zh: "更细的铝合金管" },
      { en: "Stands on its wheels when folded", zh: "折叠后靠轮子站立" },
      { en: "Everyday trips, not the overhead bin", zh: "日常短途，不是客舱行李架款" },
    ],
    specs: [
      frame,
      {
        label: { en: "Target weight", zh: "目标自重" },
        value: { en: "5.8 kg", zh: "5.8 kg" },
      },
      {
        label: { en: "Fold", zh: "折叠" },
        value: {
          en: "Umbrella fold, narrow standing package",
          zh: "伞折，收起后窄而立得住",
        },
      },
      {
        label: { en: "Age guidance", zh: "年龄参考" },
        value: { en: "About 6 months to 3 years", zh: "约 6 个月至 3 岁" },
      },
      {
        label: { en: "Seat limit", zh: "座椅承重" },
        value: { en: "15 kg", zh: "15 kg" },
      },
      {
        label: { en: "Finish", zh: "配色" },
        value: { en: "Sage, cognac grip", zh: "鼠尾草绿，干邑色握把" },
      },
    ],
    images: [
      {
        src: "/images/slip-open.jpg",
        alt: {
          en: "Slip umbrella stroller, open",
          zh: "展开的 Slip 伞车",
        },
      },
      {
        src: "/images/slip-folded.jpg",
        alt: {
          en: "Slip folded into a narrow standing package",
          zh: "Slip 收成窄条并自行站立",
        },
      },
    ],
  },
  {
    slug: "glide-12",
    category: "balance",
    name: "Glide 12",
    tagline: {
      en: "Twelve-inch wheels. No pedals. Sage.",
      zh: "十二寸轮。没有脚踏。鼠尾草绿。",
    },
    summary: {
      en: "A first balance bike with a low step-through frame, cream tires, and a tan saddle.",
      zh: "第一辆平衡车：低跨车架、奶油色轮胎、浅棕座垫。",
    },
    story: {
      en: "Glide 12 is for the age when a child pushes with both feet and does not need a chain. The saddle moves. The frame stays low. There is a bell, and there is no logo on it.",
      zh: "Glide 12 给还在用两只脚蹬地、用不到链条的年纪。座垫可调，车架压得很低。有一只铃，铃上没有标志。",
    },
    highlights: [
      { en: "No pedals, no chain", zh: "没有脚踏，没有链条" },
      { en: "Low step-through frame", zh: "低跨车架" },
      { en: "Adjustable saddle", zh: "座垫高度可调" },
      { en: "12-inch cream tires", zh: "12 寸奶油色轮胎" },
    ],
    specs: [
      {
        label: { en: "Frame", zh: "车架" },
        value: { en: "Powder-coated aluminum", zh: "喷涂铝合金" },
      },
      {
        label: { en: "Wheels", zh: "轮径" },
        value: { en: "12 inch", zh: "12 寸" },
      },
      {
        label: { en: "Pedals", zh: "脚踏" },
        value: { en: "None", zh: "无" },
      },
      {
        label: { en: "Age guidance", zh: "年龄参考" },
        value: { en: "About 2 to 4 years", zh: "约 2 至 4 岁" },
      },
      {
        label: { en: "Saddle", zh: "座垫" },
        value: { en: "Height adjustable", zh: "高度可调" },
      },
      {
        label: { en: "Finish", zh: "配色" },
        value: { en: "Sage", zh: "鼠尾草绿" },
      },
    ],
    images: [
      {
        src: "/images/glide-bike.jpg",
        alt: {
          en: "Glide 12 balance bike in sage",
          zh: "鼠尾草绿的 Glide 12 平衡车",
        },
      },
    ],
  },
  {
    slug: "glide-14",
    category: "balance",
    name: "Glide 14",
    tagline: {
      en: "The next size, in clay.",
      zh: "大一号，陶土色。",
    },
    summary: {
      en: "A fourteen-inch balance bike for the child who has outgrown the first frame but is not ready for pedals.",
      zh: "十四寸平衡车，给已经坐不下第一辆、但还没到脚踏车的孩子。",
    },
    story: {
      en: "Glide 14 repeats the low frame and the cream tire, one size up. Clay is the second catalog color. Private-label colors are a separate conversation, after a sample.",
      zh: "Glide 14 沿用低跨车架和奶油色轮胎，只是大一号。陶土色是目录里的第二种颜色。贴牌色要等样品之后再单独谈。",
    },
    highlights: [
      { en: "14-inch wheels", zh: "14 寸轮" },
      { en: "Still no pedals", zh: "依然没有脚踏" },
      { en: "Clay powder coat", zh: "陶土色喷涂" },
      { en: "Adjustable saddle", zh: "座垫高度可调" },
    ],
    specs: [
      {
        label: { en: "Frame", zh: "车架" },
        value: { en: "Powder-coated aluminum", zh: "喷涂铝合金" },
      },
      {
        label: { en: "Wheels", zh: "轮径" },
        value: { en: "14 inch", zh: "14 寸" },
      },
      {
        label: { en: "Pedals", zh: "脚踏" },
        value: { en: "None", zh: "无" },
      },
      {
        label: { en: "Age guidance", zh: "年龄参考" },
        value: { en: "About 3 to 5 years", zh: "约 3 至 5 岁" },
      },
      {
        label: { en: "Saddle", zh: "座垫" },
        value: { en: "Height adjustable", zh: "高度可调" },
      },
      {
        label: { en: "Finish", zh: "配色" },
        value: { en: "Clay", zh: "陶土色" },
      },
    ],
    images: [
      {
        src: "/images/glide-sand.jpg",
        alt: {
          en: "Glide 14 balance bike in clay",
          zh: "陶土色的 Glide 14 平衡车",
        },
      },
    ],
  },
];

export function productsIn(category: CategoryId) {
  return products.filter((product) => product.category === category);
}

export function findProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function findCategory(id: string) {
  return categories.find((category) => category.id === id);
}

export const travelCompare = {
  headers: ["Cabin One", "Cabin Flat"],
  rows: [
    {
      label: { en: "Role", zh: "角色" },
      values: [
        { en: "Reference cabin fold", zh: "客舱折叠基准款" },
        { en: "Deeper recline", zh: "靠背放得更平" },
      ],
    },
    {
      label: { en: "Target weight", zh: "目标自重" },
      values: [
        { en: "6.4 kg", zh: "6.4 kg" },
        { en: "6.8 kg", zh: "6.8 kg" },
      ],
    },
    {
      label: { en: "Target folded size", zh: "目标折叠尺寸" },
      values: [
        { en: "48 × 36 × 22 cm", zh: "48 × 36 × 22 cm" },
        { en: "50 × 44 × 25 cm", zh: "50 × 44 × 25 cm" },
      ],
    },
    {
      label: { en: "Age guidance", zh: "年龄参考" },
      values: [
        { en: "About 6 months to 4 years", zh: "约 6 个月至 4 岁" },
        {
          en: "From birth when reclined",
          zh: "放倒后可从出生起",
        },
      ],
    },
    {
      label: { en: "Finish", zh: "配色" },
      values: [
        { en: "Sage", zh: "鼠尾草绿" },
        { en: "Stone", zh: "石色" },
      ],
    },
  ] satisfies { label: Copy; values: Copy[] }[],
};

export const balanceCompare = {
  headers: ["Glide 12", "Glide 14"],
  rows: [
    {
      label: { en: "Wheels", zh: "轮径" },
      values: [
        { en: "12 inch", zh: "12 寸" },
        { en: "14 inch", zh: "14 寸" },
      ],
    },
    {
      label: { en: "Age guidance", zh: "年龄参考" },
      values: [
        { en: "About 2 to 4 years", zh: "约 2 至 4 岁" },
        { en: "About 3 to 5 years", zh: "约 3 至 5 岁" },
      ],
    },
    {
      label: { en: "Finish", zh: "配色" },
      values: [
        { en: "Sage", zh: "鼠尾草绿" },
        { en: "Clay", zh: "陶土色" },
      ],
    },
    {
      label: { en: "Pedals", zh: "脚踏" },
      values: [
        { en: "None", zh: "无" },
        { en: "None", zh: "无" },
      ],
    },
  ] satisfies { label: Copy; values: Copy[] }[],
};

export const materials = [
  {
    title: { en: "Aluminum", zh: "铝合金" },
    body: {
      en: "The travel and umbrella frames are aluminum. Balance bikes use a powder-coated aluminum frame. We do not describe it as aircraft-grade unless a mill certificate says so.",
      zh: "旅行推车和伞车的车架是铝合金。平衡车用喷涂铝合金。没有材质证明时，我们不把它写成航空级。",
    },
  },
  {
    title: { en: "Cloth", zh: "面料" },
    body: {
      en: "Sage and stone are the catalog colors. A private-label color starts from a swatch, not from a rendering.",
      zh: "目录色是鼠尾草绿和石色。贴牌色从色卡开始，不从效果图开始。",
    },
  },
  {
    title: { en: "Grip", zh: "握把" },
    body: {
      en: "Cognac leatherette on the stroller handles. Tan saddles on the bikes. Both can be swapped if the sample says they should.",
      zh: "推车握把是干邑色皮革感材料，平衡车座垫是浅棕色。如果样品要求更换，可以换。",
    },
  },
];

export const choices = [
  {
    title: { en: "You fly", zh: "你要飞" },
    body: {
      en: "Start with Cabin One. Look at the folded package next to a suitcase, then confirm the bin with the airline.",
      zh: "从 Cabin One 看起。先看它和登机箱并排的折叠体积，再向航司确认行李架。",
    },
    href: "/product/cabin-one",
  },
  {
    title: { en: "You stay in the city", zh: "你在城里短途" },
    body: {
      en: "Slip is the umbrella fold. It is lighter, narrower, and it is not the overhead-bin model.",
      zh: "Slip 是伞折。更轻、更窄，它不是头顶行李架那一款。",
    },
    href: "/product/slip",
  },
  {
    title: { en: "They are walking", zh: "孩子开始自己走" },
    body: {
      en: "Glide has no pedals. Twelve inch first, fourteen inch when the frame is too small.",
      zh: "Glide 没有脚踏。先十二寸，车架坐不下再换十四寸。",
    },
    href: "/balance",
  },
];

export const steps = [
  {
    index: "01",
    title: { en: "Brief", zh: "需求" },
    body: {
      en: "Market, model, and a quantity range. A target price helps. A mood board is optional.",
      zh: "市场、型号、数量区间。有目标价格更好。情绪板可以没有。",
    },
  },
  {
    index: "02",
    title: { en: "Sample", zh: "样品" },
    body: {
      en: "Color, fabric, and logo on a sample, not only on a screen. Changes are written down before production.",
      zh: "颜色、面料和标志做在样品上，不只留在屏幕里。改动在量产前写成文字。",
    },
  },
  {
    index: "03",
    title: { en: "Pack", zh: "包装" },
    body: {
      en: "Carton marks, manual language, and barcode. Retail box or export carton, said clearly.",
      zh: "箱唛、说明书语言、条码。零售彩盒还是出口纸箱，写清楚。",
    },
  },
  {
    index: "04",
    title: { en: "Ship", zh: "出货" },
    body: {
      en: "Inspection notes and the documents the destination actually asks for. Lead time depends on the change list.",
      zh: "验货记录，以及目的地真正要的文件。交期取决于改动清单。",
    },
  },
];

export const interests: { id: InterestId; label: Copy }[] = [
  { id: "cabin-one", label: { en: "Cabin One travel stroller", zh: "Cabin One 旅行推车" } },
  { id: "cabin-flat", label: { en: "Cabin Flat travel stroller", zh: "Cabin Flat 旅行推车" } },
  { id: "slip", label: { en: "Slip umbrella stroller", zh: "Slip 伞车" } },
  { id: "glide-12", label: { en: "Glide 12 balance bike", zh: "Glide 12 平衡车" } },
  { id: "glide-14", label: { en: "Glide 14 balance bike", zh: "Glide 14 平衡车" } },
  { id: "oem", label: { en: "Private label / OEM", zh: "贴牌 / OEM" } },
  { id: "other", label: { en: "Something else", zh: "其他" } },
];

export const ui = {
  inquire: { en: "Inquire", zh: "询盘" },
  view: { en: "View", zh: "查看" },
  range: { en: "The range", zh: "产品线" },
  rangeLede: {
    en: "Three products. One material story. No cartoon palette.",
    zh: "三条产品。同一套材料。不用卡通配色。",
  },
  which: { en: "Choose by the day", zh: "按这一天来选" },
  materialsTitle: { en: "What it is made of", zh: "它用什么做成" },
  materialsLede: {
    en: "Aluminum, cloth, and a cognac grip. The still life is the short version.",
    zh: "铝合金、面料，以及干邑色握把。静物就是短版本。",
  },
  partnerTitle: { en: "For importers and brands", zh: "给进口商和品牌" },
  partnerLede: {
    en: "A line a buyer can understand in one sitting. Minimums and lead times stay in the email, because they change with the model.",
    zh: "买家坐下来就能看懂的一条产品线。起订量和交期写在邮件里，因为它们随型号变化。",
  },
  partnerLink: { en: "How a project runs", zh: "一个项目怎么往下走" },
  specNote: {
    en: "Weights, sizes, and ages are catalog targets for this preview. Confirm them on the drawing before you order.",
    zh: "重量、尺寸和年龄是这份预览目录的目标值。下单前以图纸确认为准。",
  },
  photoNote: {
    en: "The photographs are concept studies of the line. Production samples are photographed again before a catalog is issued to buyers.",
    zh: "这些照片是产品线的概念影像。发给买家的目录，会在量产样品确认后重新拍摄。",
  },
  related: { en: "Also in this line", zh: "同一条线" },
  highlights: { en: "What to know", zh: "先看这些" },
  specifications: { en: "Specifications", zh: "参数" },
  compare: { en: "Side by side", zh: "并排看" },
  backRange: { en: "All models", zh: "全部型号" },
  home: { en: "Home", zh: "首页" },
  about: { en: "About", zh: "关于" },
  partnership: { en: "Partnership", zh: "合作" },
  contact: { en: "Contact", zh: "联系" },
  menu: { en: "Menu", zh: "菜单" },
  close: { en: "Close", zh: "关闭" },
  skip: { en: "Skip to content", zh: "跳到正文" },
  language: { en: "Language", zh: "语言" },
  email: { en: "Email", zh: "邮箱" },
  notFound: { en: "That page is not in the catalog.", zh: "目录里没有这一页。" },
  notFoundLink: { en: "Back to the range", zh: "回到产品线" },
  heroKicker: { en: "Aluminum · cabin-conscious", zh: "铝合金 · 以客舱为尺寸" },
  heroTitle: { en: "Built for the overhead bin.", zh: "为客舱行李架而做。" },
  heroLede: {
    en: "Aluminum travel strollers, a slimmer umbrella fold, and balance bikes. One quiet line for families who move, and for the brands that sell to them.",
    zh: "铝合金旅行推车、更轻的伞车，以及儿童平衡车。一条给出行家庭、也给海外品牌的产品线。",
  },
  heroPrimary: { en: "See Cabin One", zh: "看 Cabin One" },
  heroSecondary: { en: "For buyers", zh: "给采购" },
  heroCaption: { en: "Cabin One, beside a cabin suitcase", zh: "Cabin One，旁边是登机箱" },
  facts: [
    { en: "Aluminum frame", zh: "铝合金车架" },
    { en: "One-hand fold", zh: "单手折叠" },
    { en: "Stands when folded", zh: "折叠后站立" },
    { en: "Sized against cabin luggage", zh: "以登机箱为参照" },
  ],
  aboutTitle: { en: "A catalog, before a factory tour.", zh: "先是一份目录，再是一次验厂。" },
  aboutBody: [
    {
      en: "Aerly is a line of lightweight children's mobility: travel strollers, umbrella strollers, and balance bikes. The site is here so a buyer can see the difference between a cabin fold, an umbrella fold, and a first bike without a sales call.",
      zh: "艾黎（Aerly）做轻量儿童出行：旅行推车、伞车和平衡车。这个网站让买家在打电话之前，就能分清客舱折叠、伞折，和孩子的第一辆两轮车。",
    },
    {
      en: "We do not print a headcount, a floor area, or a wall of certification marks on the homepage. Those belong in a conversation, next to the report that matches the destination.",
      zh: "首页不印人数、厂房面积，也不贴一排认证标志。这些该出现在谈话里，旁边是和目的地匹配的那份报告。",
    },
  ],
  partnerPageLede: {
    en: "Tell us the market first. Color, carton, and logo come after the model is clear.",
    zh: "先说市场。型号清楚之后，再谈颜色、纸箱和标志。",
  },
  contactTitle: { en: "Tell us the market.", zh: "把市场告诉我们。" },
  contactLede: {
    en: "Model, destination, and a quantity range are enough to start. The button opens an email draft to us. It does not send mail by itself.",
    zh: "型号、目的地和数量区间就够开始了。按钮会打开一封写给我们的邮件草稿，它本身不会把信发出去。",
  },
  form: {
    name: { en: "Name", zh: "姓名" },
    email: { en: "Your email", zh: "你的邮箱" },
    company: { en: "Company", zh: "公司" },
    country: { en: "Market / country", zh: "市场 / 国家" },
    interest: { en: "Interest", zh: "意向" },
    quantity: { en: "Quantity range", zh: "数量区间" },
    message: { en: "Message", zh: "留言" },
    optional: { en: "optional", zh: "选填" },
    submit: { en: "Open email draft", zh: "打开邮件草稿" },
    note: {
      en: "Opens your mail app, addressed to lili970@qq.com.",
      zh: "会打开你的邮件程序，收件人是 lili970@qq.com。",
    },
    draft: { en: "Draft", zh: "草稿" },
    copy: { en: "Copy draft", zh: "复制草稿" },
    copied: { en: "Copied", zh: "已复制" },
    errors: {
      name: { en: "Add your name.", zh: "请写下姓名。" },
      email: { en: "Add a valid email.", zh: "请写下有效邮箱。" },
      message: { en: "Add a short note.", zh: "请写一句说明。" },
    },
    placeholders: {
      quantity: { en: "For example, 200–500 units", zh: "例如 200–500 台" },
      message: {
        en: "Destination market, private label or not, and anything the sample must match.",
        zh: "目的地市场、是否贴牌，以及样品必须对齐的地方。",
      },
    },
  },
};
