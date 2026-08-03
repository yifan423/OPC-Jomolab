export type ContactIntent =
  | "加入社区"
  | "产业资源"
  | "课程咨询"
  | "高校合作"
  | "工具与算力合作";

export type ServiceSkuPreview = {
  id: string;
  title: string;
  category: string;
  summary: string;
  tags: string[];
  badge: "定制方案" | "详情筹备中";
};

export type ServiceCategory = {
  slug: "aigc-graphic" | "aigc-video" | "ai-communications" | "ai-toys";
  eyebrow: string;
  title: string;
  english: string;
  index: string;
  description: string;
  image: string;
  accent: string;
  filters: string[];
  deliverables: string[];
  skus: ServiceSkuPreview[];
};

export type LearningProgram = {
  slug: "aigc-camp" | "tiktok-camp" | "marketing-camp" | "alibaba-practice";
  title: string;
  label: string;
  duration: string;
  format: string;
  status: "开放咨询" | "预约登记" | "内容补充中";
  description: string;
  tags: string[];
  highlights: string[];
  outcomes: string[];
};

export type ToolPartner = {
  id: "workbuddy" | "qwen-work" | "meoo" | "compute";
  name: string;
  label: string;
  description: string;
  cover: string;
  coverAlt: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
  logoText?: string;
  href?: string;
  kind: "tool" | "compute";
};

export type EcosystemLogo = {
  name: string;
  image: string;
  width: number;
  height: number;
  displayHeight?: number;
  maxWidth?: number;
};

export type ProofItem = {
  label: string;
  title: string;
  description: string;
  status: "待确认" | "匿名展示";
};

export type StudentProofItem = {
  id: string;
  name: string;
  avatar: string;
  avatarAlt: string;
  categoryTags: string[];
  difficultyTags: string[];
  courses: string[];
};

export type SchoolBase = {
  id: string;
  name: string;
  summary: string[];
  metric: string;
  metricLabel: string;
  tags: string[];
  images: {
    src: string;
    alt: string;
  }[];
};

export const services: ServiceCategory[] = [
  {
    slug: "aigc-graphic",
    eyebrow: "品牌、营销与多元视觉创意",
    title: "AI 创意设计",
    english: "AI CREATIVE DESIGN",
    index: "01",
    description:
      "覆盖品牌设计、营销设计、插画设计、3D 设计与设计技能等多样化产业需求。",
    image: "/images/services/aigc-creative/hero-ai-creative-design.webp",
    accent: "#b8ef45",
    filters: ["全部", "品牌视觉", "营销海报", "电商视觉", "IP 视觉"],
    deliverables: ["品牌概念与视觉母版", "AIGC 视觉工作流", "营销物料延展", "可复用提示词与资产库"],
    skus: [
      {
        id: "graphic-brand",
        title: "品牌视觉启动包",
        category: "品牌视觉",
        summary: "从视觉母题到核心版式，建立可被团队持续使用的品牌语言。",
        tags: ["策略", "视觉母版"],
        badge: "定制方案",
      },
      {
        id: "graphic-campaign",
        title: "整合营销主视觉",
        category: "营销海报",
        summary: "围绕活动主题搭建主视觉、传播节奏和多尺寸延展。",
        tags: ["Campaign", "多端延展"],
        badge: "定制方案",
      },
      {
        id: "graphic-commerce",
        title: "AI 电商视觉系统",
        category: "电商视觉",
        summary: "统一商品图、场景图与频道视觉，让批量生产仍保持风格一致。",
        tags: ["电商", "批量生产"],
        badge: "详情筹备中",
      },
      {
        id: "graphic-ip",
        title: "IP 视觉世界观",
        category: "IP 视觉",
        summary: "从角色语言到内容场景，构建可持续扩展的 IP 视觉资产。",
        tags: ["IP", "世界观"],
        badge: "详情筹备中",
      },
      {
        id: "graphic-social",
        title: "社交内容模板库",
        category: "营销海报",
        summary: "为高频内容生产建立统一、可编辑、可复用的内容模板。",
        tags: ["社交内容", "模板"],
        badge: "定制方案",
      },
      {
        id: "graphic-launch",
        title: "新品发布视觉",
        category: "品牌视觉",
        summary: "用单一强概念贯穿发布会、社交媒体与线下物料。",
        tags: ["新品", "发布"],
        badge: "详情筹备中",
      },
    ],
  },
  {
    slug: "aigc-video",
    eyebrow: "从概念短片到内容引擎",
    title: "AIGC 视频",
    english: "AIGC MOTION",
    index: "02",
    description:
      "以商业目标反推镜头语言与生成式流程，完成从分镜、风格验证到成片交付的全链路创作。",
    image: "/images/generated/service-video.webp",
    accent: "#b8ef45",
    filters: ["全部", "品牌短片", "TVC", "短视频", "动态视觉"],
    deliverables: ["视频概念与脚本", "AI 分镜与风格帧", "动态生成工作流", "多平台成片版本"],
    skus: [
      {
        id: "video-brand",
        title: "品牌概念短片",
        category: "品牌短片",
        summary: "用一条有记忆点的叙事建立品牌情绪与核心认知。",
        tags: ["概念", "品牌叙事"],
        badge: "定制方案",
      },
      {
        id: "video-tvc",
        title: "AI 商业 TVC",
        category: "TVC",
        summary: "以风格帧先行的方式快速确认方向，降低高品质成片的沟通成本。",
        tags: ["TVC", "风格帧"],
        badge: "定制方案",
      },
      {
        id: "video-series",
        title: "系列化短视频",
        category: "短视频",
        summary: "建立角色、场景和镜头模板，持续产出同一世界观下的内容。",
        tags: ["系列内容", "高频生产"],
        badge: "详情筹备中",
      },
      {
        id: "video-motion",
        title: "发布会动态视觉",
        category: "动态视觉",
        summary: "为舞台、屏幕和社交传播构建统一的动态视觉语言。",
        tags: ["Motion", "发布会"],
        badge: "详情筹备中",
      },
      {
        id: "video-product",
        title: "产品功能演绎",
        category: "品牌短片",
        summary: "将抽象能力转化为清晰、易理解且具有视觉吸引力的场景。",
        tags: ["产品", "功能叙事"],
        badge: "定制方案",
      },
      {
        id: "video-social",
        title: "社交爆点视频",
        category: "短视频",
        summary: "从内容钩子、节奏到版本实验，面向传播效果组织创作。",
        tags: ["社交", "内容实验"],
        badge: "详情筹备中",
      },
    ],
  },
  {
    slug: "ai-communications",
    eyebrow: "策略、内容与传播闭环",
    title: "AI 传播",
    english: "AI COMMUNICATIONS",
    index: "03",
    description:
      "让 AI 参与洞察、内容生产与渠道适配，形成从策略到交付可追踪、可迭代的传播系统。",
    image: "/images/generated/service-communications.webp",
    accent: "#b8ef45",
    filters: ["全部", "传播策略", "内容矩阵", "增长实验", "活动策划"],
    deliverables: ["传播策略与议题", "内容矩阵规划", "渠道版本体系", "复盘与增长实验"],
    skus: [
      {
        id: "comms-strategy",
        title: "AI 传播策略",
        category: "传播策略",
        summary: "梳理受众、议题和内容角色，形成可执行的传播路线。",
        tags: ["洞察", "策略"],
        badge: "定制方案",
      },
      {
        id: "comms-matrix",
        title: "品牌内容矩阵",
        category: "内容矩阵",
        summary: "为不同平台建立统一主题下的内容结构与生产节奏。",
        tags: ["内容", "矩阵"],
        badge: "定制方案",
      },
      {
        id: "comms-growth",
        title: "增长内容实验",
        category: "增长实验",
        summary: "以小步测试验证钩子、创意形式和人群反馈。",
        tags: ["实验", "增长"],
        badge: "详情筹备中",
      },
      {
        id: "comms-event",
        title: "整合活动策划",
        category: "活动策划",
        summary: "用清晰的主题和参与机制串联线上传播与线下体验。",
        tags: ["活动", "整合传播"],
        badge: "详情筹备中",
      },
      {
        id: "comms-opc",
        title: "OPC 品牌起步包",
        category: "传播策略",
        summary: "帮助一人公司快速建立定位、内容骨架和第一批传播资产。",
        tags: ["OPC", "品牌起步"],
        badge: "定制方案",
      },
      {
        id: "comms-insight",
        title: "行业议题研究",
        category: "内容矩阵",
        summary: "把行业变化转化为持续可讲、能建立专业认知的内容资产。",
        tags: ["研究", "内容资产"],
        badge: "详情筹备中",
      },
    ],
  },
  {
    slug: "ai-toys",
    eyebrow: "从角色概念到可感知 IP",
    title: "AI 潮玩",
    english: "AI COLLECTIBLES",
    index: "04",
    description:
      "用 AI 加速角色探索、世界观构建与衍生设计，让创意概念更快进入可展示、可合作的状态。",
    image: "/images/generated/service-toys.webp",
    accent: "#b8ef45",
    filters: ["全部", "角色概念", "潮玩造型", "衍生设计", "IP 联名"],
    deliverables: ["角色概念与设定", "造型与材质方向", "衍生品视觉方案", "联名传播提案"],
    skus: [
      {
        id: "toys-character",
        title: "原创角色概念",
        category: "角色概念",
        summary: "建立角色轮廓、性格、颜色和可持续扩展的视觉规则。",
        tags: ["角色", "设定"],
        badge: "定制方案",
      },
      {
        id: "toys-figure",
        title: "潮玩造型提案",
        category: "潮玩造型",
        summary: "从二维概念延展到体块、材质与展示角度的完整提案。",
        tags: ["造型", "材质"],
        badge: "定制方案",
      },
      {
        id: "toys-derivative",
        title: "IP 衍生视觉",
        category: "衍生设计",
        summary: "围绕角色语言拓展礼赠、服饰和空间展示方向。",
        tags: ["衍生", "应用"],
        badge: "详情筹备中",
      },
      {
        id: "toys-collab",
        title: "品牌联名概念",
        category: "IP 联名",
        summary: "寻找品牌与角色之间真正成立的共同主题和内容机制。",
        tags: ["联名", "传播"],
        badge: "详情筹备中",
      },
      {
        id: "toys-world",
        title: "角色世界观搭建",
        category: "角色概念",
        summary: "构建角色关系、场景和内容线索，为长期运营保留空间。",
        tags: ["世界观", "内容"],
        badge: "定制方案",
      },
      {
        id: "toys-launch",
        title: "潮玩首发视觉",
        category: "IP 联名",
        summary: "用统一视觉语言完成首发预热、展示与社交传播。",
        tags: ["首发", "视觉"],
        badge: "详情筹备中",
      },
    ],
  },
];

export const learningPrograms: LearningProgram[] = [
  {
    slug: "aigc-camp",
    title: "AIGC 训练营",
    label: "体验研学营",
    duration: "2 日 / 5 日",
    format: "线上 8h 课程 + 线下 2 日集训",
    status: "开放咨询",
    description:
      "在大厂资深设计导师指导下，依托真实大厂商业实战项目，学员系统学习 AI 工具在商业设计流程中的实践，掌握从 0 到 1 的 AIGC 设计作品落地能力。",
    tags: ["阿里官方证书", "择优推荐信", "OPC 孵化机会"],
    highlights: ["真实商业命题", "小班集中训练", "导师评审反馈", "AIGC 作品落地"],
    outcomes: ["掌握生成式设计工作流", "理解商业视觉判断方法", "完成可展示的项目作品", "形成可复用的提示词结构"],
  },
  {
    slug: "tiktok-camp",
    title: "TK 线上跨境训练营",
    label: "体验研学营",
    duration: "5 周",
    format: "线上 8h 录播 + 12h 直播 + 线下 4 周陪跑",
    status: "预约登记",
    description:
      "一线资深导师线上授课，拆解账号运营、爆款选品、爆品视频复现等内容，提供精选货盘与供应链，帮助 0 基础小白快速入局 TikTok，抓住全球跨境流量红利。",
    tags: ["阿里官方证书", "OPC 孵化机会"],
    highlights: ["账号运营框架", "爆款选品方法", "视频复现训练", "货盘与供应链认知"],
    outcomes: ["形成跨境内容节奏", "理解选品与内容关系", "完成账号启动计划", "获得阶段性陪跑反馈"],
  },
  {
    slug: "marketing-camp",
    title: "营销策划训练营",
    label: "体验研学营",
    duration: "待补充",
    format: "线上 8h 录播 + 5 日课程",
    status: "内容补充中",
    description:
      "一线资深导师线上授课，深度结合阿里、百度、腾讯全域平台业务场景及需求，打通公域投放、流量转化与用户运营，进行方案策划及结合新媒体进行增长方案落地。",
    tags: ["阿里官方证书", "OPC 孵化机会"],
    highlights: ["全域业务场景", "投放与转化", "新媒体增长", "整合营销"],
    outcomes: ["建立营销问题拆解方法", "完成策略方案框架", "理解渠道协同逻辑", "形成增长实验意识"],
  },
  {
    slug: "alibaba-practice",
    title: "线下实训实践",
    label: "实训实践",
    duration: "按项目排期",
    format: "阿里园区 + 一线员工带教 + 真实商业项目",
    status: "预约登记",
    description:
      "在真实园区与商业项目环境中，由一线员工带教完成岗位实践、项目协作与阶段成果沉淀。",
    tags: ["阿里园区办公", "一线员工带教", "真实商业项目", "官方证书", "支持背调"],
    highlights: ["真实业务命题", "项目导师带教", "阶段评审复盘", "作品与能力沉淀"],
    outcomes: ["了解真实项目协作方式", "积累项目型作品", "提升表达与交付能力", "明确适合自己的岗位方向"],
  },
];

export const tools: ToolPartner[] = [
  {
    id: "workbuddy",
    name: "WorkBuddy",
    label: "全场景 AI 工作台",
    description: "多专家、多模型协同，从策略到交付组织复杂工作。",
    cover: "/images/products/workbuddy-cover.webp",
    coverAlt: "WorkBuddy 官方专家团队产品界面",
    logo: "/images/products/workbuddy-logo.svg",
    logoWidth: 40,
    logoHeight: 40,
    logoText: "WorkBuddy",
    href: "https://www.workbuddy.cn/",
    kind: "tool",
  },
  {
    id: "qwen-work",
    name: "千问办公",
    label: "专业办公产物",
    description: "面向文档、表格、演示和专业工作流的 AI 办公能力。",
    cover: "/images/products/qwen-work-cover.svg",
    coverAlt: "千问办公官方工作台产品界面",
    logo: "/images/products/qwen-work-logo.svg",
    logoWidth: 540,
    logoHeight: 120,
    href: "https://qwenwork.cn/",
    kind: "tool",
  },
  {
    id: "meoo",
    name: "秒悟 Meoo",
    label: "AI 应用创作",
    description: "通过自然语言将想法转化为网页、应用与可交付成果。",
    cover: "/images/products/meoo-cover.webp",
    coverAlt: "秒悟 Meoo 官网展示的创意开发者网站生成案例",
    logo: "/images/products/meoo-logo.webp",
    logoWidth: 184,
    logoHeight: 184,
    logoText: "秒悟 Meoo",
    href: "https://meoo.com/",
    kind: "tool",
  },
  {
    id: "compute",
    name: "算力合作席位",
    label: "Compute Partner",
    description: "为训练、生成与应用部署预留可扩展的算力合作入口。",
    cover: "/images/generated/contact-bg.webp",
    coverAlt: "Jomolab 蓝色数字算力抽象视觉",
    kind: "compute",
  },
];

export const proofs: ProofItem[] = [
  {
    label: "LONG-TERM OPC · 01",
    title: "官方签约 OPC 席位",
    description: "合作资料确认后展示长期合作方向、代表项目与公开链接。",
    status: "待确认",
  },
  {
    label: "LONG-TERM OPC · 02",
    title: "官方签约 OPC 席位",
    description: "当前不公开未经授权的姓名、头像或签约关系。",
    status: "待确认",
  },
  {
    label: "STUDENT · ANONYMOUS",
    title: "学员项目成长档案",
    description: "以脱敏方式展示学习路径、项目成果与能力变化。",
    status: "匿名展示",
  },
  {
    label: "UNIVERSITY · PLACEHOLDER",
    title: "高校合作项目",
    description: "合作院校确认公开授权后替换为正式校名与项目说明。",
    status: "待确认",
  },
];

export const schoolBases: SchoolBase[] = [
  {
    id: "dehong-vocational-college",
    name: "德宏职业学院",
    summary: [
      "德宏职业学院是一所以医、工、财、旅专业为主的综合性高等职业院校，围绕口岸经济与面向南亚东南亚辐射中心建设，形成6大专业群、40个高职专科专业的教育体系。",
      "2023年，德宏州人民政府、德宏职业学院与阿里巴巴、银泰商业集团泰渡签署合作，建设开放型产教融合实践中心，引入真实生产项目，推进工学一体与课程实践改革。",
    ],
    metric: "2500㎡",
    metricLabel: "开放型产教融合实践中心",
    tags: ["口岸经济", "跨境电子商务", "真实生产项目", "工学一体"],
    images: [
      {
        src: "/images/schools/dehong/base-entry.webp",
        alt: "德宏职业学院校企共建智慧物流实训基地入口",
      },
      {
        src: "/images/schools/dehong/industry-center.webp",
        alt: "德宏职业学院产教融合实践中心",
      },
      {
        src: "/images/schools/dehong/training-class.webp",
        alt: "德宏职业学院跨境电商实训课堂",
      },
    ],
  },
  {
    id: "heilongjiang-agricultural-economy-vocational-college",
    name: "黑龙江农业经济职业学院",
    summary: [
      "黑龙江农业经济职业学院始建于1958年，长期坚持立足乡村办学与服务三农，与周边农业市县建立紧密的产学研合作关系。",
      "学院设有阿里农村电商产业学院，建设兼顾学生综合实训、创业、社会服务与国际交流的多功能产教融合实训中心，为项目实践提供线下承载空间。",
    ],
    metric: "3000㎡",
    metricLabel: "多功能产教融合实训中心",
    tags: ["阿里农村电商产业学院", "服务三农", "产学研合作", "综合实训"],
    images: [
      {
        src: "/images/schools/heilongjiang-agri/training-workspace.webp",
        alt: "黑龙江农业经济职业学院实训工作空间",
      },
      {
        src: "/images/schools/heilongjiang-agri/project-practice.webp",
        alt: "黑龙江农业经济职业学院电商项目实践场景",
      },
      {
        src: "/images/schools/heilongjiang-agri/industry-studio.webp",
        alt: "黑龙江农业经济职业学院产教融合实训中心",
      },
      {
        src: "/images/schools/heilongjiang-agri/data-training.webp",
        alt: "黑龙江农业经济职业学院数据实训课堂",
      },
    ],
  },
];

export const studentProofs: StudentProofItem[] = [
  {
    id: "elina",
    name: "Elina",
    avatar: "/images/students/elina.jpg",
    avatarAlt: "Elina 的个人档案照片",
    categoryTags: ["实训实践", "效果营销"],
    difficultyTags: ["产品运营", "高级 OPC"],
    courses: ["AIGC 训练营", "营销策划训练营"],
  },
  {
    id: "student-placeholder-02",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-a.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
  {
    id: "student-placeholder-03",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-b.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
  {
    id: "student-placeholder-04",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-c.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
  {
    id: "student-placeholder-05",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-d.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
  {
    id: "student-placeholder-06",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-a.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
  {
    id: "student-placeholder-07",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-b.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
  {
    id: "student-placeholder-08",
    name: "姓名待补充",
    avatar: "/images/generated/student-avatars/student-c.webp",
    avatarAlt: "个人 OPC 学员 AI 头像占位",
    categoryTags: ["品类待补充"],
    difficultyTags: ["难度待补充"],
    courses: ["课程待补充"],
  },
];

export const practiceRoles = [
  {
    title: "AI 平面视觉",
    teams: "品牌与电商视觉方向",
    description: "参与营销主视觉、品牌延展与 AIGC 平面工作流实践。",
  },
  {
    title: "AI 交互视觉",
    teams: "产品与活动体验方向",
    description: "完成信息架构、交互流程、多端界面与活动视觉实践。",
  },
  {
    title: "AI 品牌策略",
    teams: "品牌、文旅与平台方向",
    description: "围绕品牌定位、视觉系统、IP 与传播策略完成项目提案。",
  },
  {
    title: "AI 视频设计",
    teams: "内容与传播方向",
    description: "完成风格帧、短片模板、提示词结构与视频资产制作。",
  },
  {
    title: "用户运营",
    teams: "增长与活动运营方向",
    description: "参与用户增长、活动运营、社群与内容策略实践。",
  },
  {
    title: "营销策划",
    teams: "整合营销与新媒体方向",
    description: "拆解业务目标，形成传播方案与增长落地计划。",
  },
];

export const ecosystemLogos: EcosystemLogo[] = [
  {
    name: "阿里巴巴",
    image: "/images/platforms/alibaba.webp",
    width: 604,
    height: 169,
    displayHeight: 38,
  },
  {
    name: "阿里云",
    image: "/images/platforms/alibaba-cloud.webp",
    width: 900,
    height: 211,
    displayHeight: 36,
  },
  {
    name: "天猫",
    image: "/images/platforms/tmall-cn-new.webp",
    width: 438,
    height: 300,
    displayHeight: 54,
  },
  {
    name: "天猫国际",
    image: "/images/platforms/tmall-global.webp",
    width: 490,
    height: 171,
    displayHeight: 39,
  },
  {
    name: "淘宝",
    image: "/images/platforms/taobao.webp",
    width: 463,
    height: 300,
    displayHeight: 52,
  },
  {
    name: "1688",
    image: "/images/platforms/1688.webp",
    width: 371,
    height: 156,
    displayHeight: 39,
  },
  {
    name: "千问",
    image: "/images/platforms/qianwen.webp",
    width: 818,
    height: 300,
    displayHeight: 39,
  },
  {
    name: "阿里妈妈",
    image: "/images/platforms/alimama.webp",
    width: 247,
    height: 300,
    displayHeight: 58,
  },
  {
    name: "瓴羊",
    image: "/images/platforms/lingyang.webp",
    width: 496,
    height: 300,
    displayHeight: 52,
  },
  {
    name: "优酷",
    image: "/images/platforms/youku.webp",
    width: 264,
    height: 300,
    displayHeight: 58,
  },
  {
    name: "飞猪旅行",
    image: "/images/platforms/fliggy.webp",
    width: 389,
    height: 300,
    displayHeight: 56,
  },
  {
    name: "哔哩哔哩",
    image: "/images/platforms/bilibili.webp",
    width: 657,
    height: 300,
    displayHeight: 44,
  },
  {
    name: "银联",
    image: "/images/platforms/unionpay.webp",
    width: 289,
    height: 194,
    displayHeight: 50,
  },
  {
    name: "Lazada",
    image: "/images/platforms/lazada.webp",
    width: 900,
    height: 256,
    displayHeight: 40,
  },
  {
    name: "途虎养车",
    image: "/images/platforms/tuhu.webp",
    width: 478,
    height: 121,
    displayHeight: 35,
  },
  {
    name: "科沃斯",
    image: "/images/platforms/ecovacs.webp",
    width: 501,
    height: 168,
    displayHeight: 38,
  },
  {
    name: "松下电器",
    image: "/images/platforms/panasonic.webp",
    width: 606,
    height: 258,
    displayHeight: 44,
  },
  {
    name: "宁德时代",
    image: "/images/platforms/catl.webp",
    width: 729,
    height: 300,
    displayHeight: 46,
  },
  {
    name: "古茗",
    image: "/images/platforms/guming.webp",
    width: 545,
    height: 300,
    displayHeight: 52,
  },
  {
    name: "万达广场",
    image: "/images/platforms/wanda-plaza.webp",
    width: 459,
    height: 126,
    displayHeight: 34,
  },
  {
    name: "新东方",
    image: "/images/platforms/xdf.webp",
    width: 404,
    height: 178,
    displayHeight: 44,
  },
  {
    name: "武汉中百",
    image: "/images/platforms/wuhan-zhongbai.webp",
    width: 192,
    height: 258,
    displayHeight: 58,
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getLearningProgram(slug: string) {
  return learningPrograms.find((program) => program.slug === slug);
}
