/**
 * health-coach-app/data.js
 * 健康教练应用 - 数据文件
 *
 * 包含三大数据结构：
 *   1. EXERCISES     - 运动详情库（6个弹力带/自重训练动作）
 *   2. VIDEOS        - 视频库（33个B站跟练视频）
 *   3. EXERCISE_PLAN - 4阶段运动计划（每周7天日程）
 *
 * 用法：通过 <script src="data.js"></script> 加载后，
 *       EXERCISES / VIDEOS / EXERCISE_PLAN 三个常量可在全局使用。
 */

// ============================================================
// 1. 运动详情库 EXERCISES
//    键为 exerciseId，值包含动作名称、目标肌群、步骤、安全警告等
// ============================================================

const EXERCISES = {

  // ---- a) 弹力带坐姿伸膝 ----
  seated_knee_ext: {
    id: "seated_knee_ext",
    name: "弹力带坐姿伸膝",
    targetMuscle: "股四头肌（大腿前侧）",
    benefit: "增强大腿前侧力量，改善膝关节稳定性，辅助日常行走和上下楼梯能力",
    sets: 3,
    reps: "12-15次",
    restSeconds: 45,
    steps: [
      {
        step: 1,
        title: "准备",
        desc: "坐在稳固的椅子上，双脚自然踩地。将弹力带一端固定在椅子后腿或前方固定物上，另一端套在一侧脚踝处。调整弹力带长度，确保起始时有轻微张力。"
      },
      {
        step: 2,
        title: "起始姿势",
        desc: "保持坐姿端正，背部挺直不靠椅背，双手扶住椅子两侧。大腿保持不动，小腿自然下垂，脚尖朝前。"
      },
      {
        step: 3,
        title: "伸膝动作",
        desc: "缓慢将小腿向前上方伸直，感受大腿前侧肌肉收缩发力。到达最高点（腿接近伸直）后停顿1秒，注意膝盖不要完全锁死。"
      },
      {
        step: 4,
        title: "还原动作",
        desc: "缓慢控制小腿回到起始位置，整个过程约用3秒。不要让弹力带快速回弹，始终保持肌肉控制。"
      },
      {
        step: 5,
        title: "呼吸方法",
        desc: "伸膝时呼气，还原时吸气。全程保持均匀呼吸节奏，每个动作配合一次呼吸。完成一侧12-15次后换另一侧。"
      }
    ],
    warning: "全程保持均匀呼吸，切勿憋气！高血压患者尤其注意——憋气（瓦式呼吸）会导致血压骤升，有脑血管意外风险。动作过程中保持核心稳定，身体不要前后晃动。膝关节有急性炎症或剧烈疼痛时暂停。",
    phases: [1, 2, 3, 4]
  },

  // ---- b) 弹力带坐姿屈腿 ----
  seated_leg_curl: {
    id: "seated_leg_curl",
    name: "弹力带坐姿屈腿",
    targetMuscle: "腘绳肌（大腿后侧）",
    benefit: "增强大腿后侧力量，平衡前后侧肌力，保护膝关节，预防腘绳肌拉伤",
    sets: 3,
    reps: "12-15次",
    restSeconds: 45,
    steps: [
      {
        step: 1,
        title: "准备",
        desc: "坐在椅子前缘，将弹力带一端固定在前方稳固物体（如桌腿）上，另一端套在脚踝处。坐稳后双腿略微前伸，脚跟离地。"
      },
      {
        step: 2,
        title: "起始姿势",
        desc: "双手扶住椅子两侧保持稳定，背部挺直。起始时双腿自然伸直，弹力带保持适度张力，脚尖朝上。"
      },
      {
        step: 3,
        title: "屈腿动作",
        desc: "缓慢将脚跟向臀部方向收回，感受大腿后侧肌肉收缩。收到最大限度后停顿1秒，注意保持大腿不动，只动小腿。"
      },
      {
        step: 4,
        title: "还原动作",
        desc: "缓慢控制小腿回到伸直位置，约用3秒完成。不要让弹力带快速拉回，始终保持肌肉发力控制。"
      },
      {
        step: 5,
        title: "呼吸方法",
        desc: "屈腿时呼气，还原时吸气。保持均匀呼吸节奏，切勿憋气。完成一侧12-15次后换另一侧。"
      }
    ],
    warning: "全程保持均匀呼吸，切勿憋气！高血压患者严禁憋气，以免血压骤升。动作要缓慢可控，避免利用惯性甩腿。如大腿后侧有拉伤感请立即停止。",
    phases: [1, 2, 3, 4]
  },

  // ---- c) 臀桥 ----
  glute_bridge: {
    id: "glute_bridge",
    name: "臀桥",
    targetMuscle: "臀大肌、腘绳肌",
    benefit: "激活臀部肌肉，改善骨盆稳定性，缓解久坐导致的腰背酸痛，增强髋关节伸展能力",
    sets: 3,
    reps: "12-15次",
    restSeconds: 45,
    steps: [
      {
        step: 1,
        title: "准备",
        desc: "仰卧在瑜伽垫或平坦地面上，双膝弯曲约90度，双脚平放与肩同宽，脚跟靠近臀部约一拳距离。"
      },
      {
        step: 2,
        title: "起始姿势",
        desc: "双臂自然放在身体两侧，掌心朝下。腹部微收，下背部轻轻贴地，不要过度拱腰。"
      },
      {
        step: 3,
        title: "顶髋动作",
        desc: "臀部发力缓慢向上顶起髋部，直到膝盖、髋部、肩膀成一条直线。顶峰时主动收紧臀部，停顿1-2秒。"
      },
      {
        step: 4,
        title: "还原动作",
        desc: "缓慢控制臀部下落回到起始位置，约用3秒。不要直接掉落，始终保持臀部肌肉参与。"
      },
      {
        step: 5,
        title: "呼吸方法",
        desc: "顶髋时呼气，下落时吸气。全程保持自然均匀的呼吸节奏，切勿憋气。"
      }
    ],
    warning: "全程保持均匀呼吸，切勿憋气！高血压患者注意保持呼吸通畅。注意用臀部发力而非腰部代偿，避免过度挺腰造成腰椎压力。顶峰时不要过度伸展腰椎。",
    phases: [1, 2, 3, 4]
  },

  // ---- d) 跪姿/推墙俯卧撑 ----
  wall_pushup: {
    id: "wall_pushup",
    name: "跪姿/推墙俯卧撑",
    targetMuscle: "胸大肌、三角肌前束、肱三头肌",
    benefit: "增强上肢推力，改善肩关节稳定性，为标准俯卧撑打基础",
    sets: 3,
    reps: "10-12次",
    restSeconds: 60,
    steps: [
      {
        step: 1,
        title: "准备",
        desc: "面向墙壁站立，距离墙壁约一臂距离。双手撑墙，与肩同宽，手指朝上，高度约在胸部位置。"
      },
      {
        step: 2,
        title: "起始姿势",
        desc: "身体保持从头到脚一条直线，核心收紧，脚跟微微抬起。手臂自然伸直，但不锁死肘关节。"
      },
      {
        step: 3,
        title: "下压动作",
        desc: "缓慢弯曲手肘，让身体向墙靠近。手肘约45度外展，直到鼻尖接近墙面。全程保持身体一条直线。"
      },
      {
        step: 4,
        title: "推起动作",
        desc: "手掌发力将身体推回起始位置，感受胸部和手臂发力。推起约用2秒，保持控制不借助惯性。"
      },
      {
        step: 5,
        title: "呼吸方法",
        desc: "下压时吸气，推起时呼气。保持均匀呼吸节奏，每个动作配合一次呼吸。力量增强后可逐步过渡到跪姿俯卧撑。"
      }
    ],
    warning: "全程保持均匀呼吸，切勿憋气！高血压患者严禁在用力时憋气。推墙俯卧撑适合初学者，力量增强后可逐步增加难度。手腕如有不适请调整手部位置或改为握拳支撑。",
    phases: [2, 3, 4]
  },

  // ---- e) 靠墙静蹲 ----
  wall_squat: {
    id: "wall_squat",
    name: "靠墙静蹲",
    targetMuscle: "股四头肌、臀肌",
    benefit: "增强下肢力量和耐力，提高膝关节稳定性，是膝盖友好的静力性训练",
    sets: 3,
    reps: "保持20-30秒",
    restSeconds: 60,
    steps: [
      {
        step: 1,
        title: "准备",
        desc: "背靠墙壁站立，双脚向前迈出约一步距离，双脚与肩同宽，脚尖朝前或微向外。"
      },
      {
        step: 2,
        title: "起始姿势",
        desc: "后背完全贴墙，头部、肩胛骨、臀部贴墙。核心收紧，双手自然下垂或交叉于胸前。"
      },
      {
        step: 3,
        title: "下蹲动作",
        desc: "缓慢沿墙向下滑，至大腿与地面约呈45-60度角。初期角度可大一些（浅蹲），逐渐加深。膝盖不超过脚尖。"
      },
      {
        step: 4,
        title: "保持姿势",
        desc: "维持该姿势不动，感受大腿前侧持续发力。保持均匀呼吸，不要憋气。初学者保持20秒，逐渐增加至30秒以上。"
      },
      {
        step: 5,
        title: "还原动作",
        desc: "缓慢沿墙向上滑回站立位置。起身时保持腿部控制，不要突然站起。"
      }
    ],
    warning: "全程保持均匀呼吸，切勿憋气！静蹲时保持自然呼吸节奏，高血压患者尤其注意。膝盖方向与脚尖一致，切勿内扣。膝关节如有疼痛请增大下蹲角度（减小屈膝程度）或停止。膝盖不适者可从浅蹲开始。",
    phases: [2, 3, 4]
  },

  // ---- f) 弹力带面拉 ----
  band_face_pull: {
    id: "band_face_pull",
    name: "弹力带面拉",
    targetMuscle: "三角肌后束、斜方肌中下部、菱形肌",
    benefit: "改善体态，增强上背部力量，纠正圆肩驼背，平衡胸部训练带来的前侧紧张",
    sets: 3,
    reps: "12-15次",
    restSeconds: 45,
    steps: [
      {
        step: 1,
        title: "准备",
        desc: "将弹力带固定在与面部同高的稳固物体上（如门把手、柱子）。双手握住弹力带两端，退后一步使弹力带产生适度张力。"
      },
      {
        step: 2,
        title: "起始姿势",
        desc: "面向固定点站立，双臂前伸，手肘微屈。身体保持直立，核心收紧，肩胛骨自然放松。"
      },
      {
        step: 3,
        title: "后拉动作",
        desc: "将弹力带向面部方向拉，手肘向外打开，双手收到耳朵两侧。拉至终点时肩胛骨主动收紧，停顿1秒。"
      },
      {
        step: 4,
        title: "还原动作",
        desc: "缓慢控制手臂回到前伸位置，约用3秒。保持弹力带张力不消失，不要快速放回。"
      },
      {
        step: 5,
        title: "呼吸方法",
        desc: "后拉时呼气，还原时吸气。全程保持均匀呼吸节奏，切勿憋气。"
      }
    ],
    warning: "全程保持均匀呼吸，切勿憋气！拉绳时肩胛骨主动收缩，避免单纯用手臂硬拉。保持核心稳定，身体不要前后晃动。如肩关节有疼痛请减小弹力带张力或停止。",
    phases: [3, 4]
  }
};


// ============================================================
// 2. 视频库 VIDEOS
//    键为 B站 BV号，值包含标题、UP主、时长、链接、标签等
// ============================================================

const VIDEOS = {

  // ========== 有氧 Cardio ==========

  BV1zWuRzZEso: {
    id: "BV1zWuRzZEso",
    title: "13分钟无跑跳有氧运动，膝盖友好低冲击燃脂",
    up: "ALEX健身频道",
    duration: "13:00",
    url: "https://www.bilibili.com/video/BV1zWuRzZEso",
    views: "52.3万",
    type: "cardio",
    tags: ["无跑跳", "膝盖友好", "低冲击", "零基础", "燃脂"],
    phases: [1, 2],
    replacementType: "A",
    periodSafe: true
  },

  BV1QY4tzmEf4: {
    id: "BV1QY4tzmEf4",
    title: "40分钟低冲击燃脂有氧，全程无跑跳",
    up: "ALEX健身频道",
    duration: "40:00",
    url: "https://www.bilibili.com/video/BV1QY4tzmEf4",
    views: "38.7万",
    type: "cardio",
    tags: ["无跑跳", "低冲击", "燃脂", "大基数"],
    phases: [3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1oZJczcEs9: {
    id: "BV1oZJczcEs9",
    title: "8分钟快速热身有氧，零基础友好",
    up: "ALEX健身频道",
    duration: "8:00",
    url: "https://www.bilibili.com/video/BV1oZJczcEs9",
    views: "21.5万",
    type: "cardio",
    tags: ["零基础", "低冲击", "无跑跳", "热身"],
    phases: [1],
    replacementType: "A",
    periodSafe: true
  },

  BV1L1pqe7EBp: {
    id: "BV1L1pqe7EBp",
    title: "15分钟无跑跳有氧运动，大基数友好",
    up: "六六爱健身吖",
    duration: "15:00",
    url: "https://www.bilibili.com/video/BV1L1pqe7EBp",
    views: "15.8万",
    type: "cardio",
    tags: ["无跑跳", "大基数", "零基础", "膝盖友好"],
    phases: [1, 2],
    replacementType: "A",
    periodSafe: true
  },

  BV19xT16qE8c: {
    id: "BV19xT16qE8c",
    title: "25分钟低强度有氧，适合初学者",
    up: "天天运动Live",
    duration: "25:00",
    url: "https://www.bilibili.com/video/BV19xT16qE8c",
    views: "29.1万",
    type: "cardio",
    tags: ["低冲击", "零基础", "无跑跳", "燃脂"],
    phases: [2, 3],
    replacementType: "A",
    periodSafe: true
  },

  BV1vJMb6hEq5: {
    id: "BV1vJMb6hEq5",
    title: "15分钟零基础有氧，站立无跑跳",
    up: "卡吉kajipm",
    duration: "15:00",
    url: "https://www.bilibili.com/video/BV1vJMb6hEq5",
    views: "18.6万",
    type: "cardio",
    tags: ["零基础", "无跑跳", "低冲击", "膝盖友好"],
    phases: [1, 2],
    replacementType: "A",
    periodSafe: true
  },

  BV1qd4y1b7ar: {
    id: "BV1qd4y1b7ar",
    title: "41分钟大基数有氧燃脂，全程无跑跳",
    up: "泡椒味桃子",
    duration: "41:00",
    url: "https://www.bilibili.com/video/BV1qd4y1b7ar",
    views: "42.3万",
    type: "cardio",
    tags: ["大基数", "无跑跳", "低冲击", "燃脂"],
    phases: [3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1Y88SehEcU: {
    id: "BV1Y88SehEcU",
    title: "30分钟无跑跳有氧运动",
    up: "韩小四",
    duration: "30:00",
    url: "https://www.bilibili.com/video/BV1Y88SehEcU",
    views: "27.9万",
    type: "cardio",
    tags: ["无跑跳", "低冲击", "燃脂"],
    phases: [2, 3],
    replacementType: "A",
    periodSafe: true
  },

  BV1vU4y1g7Pg: {
    id: "BV1vU4y1g7Pg",
    title: "20分钟低冲击有氧，优雅燃脂",
    up: "欧阳春晓Aurora",
    duration: "20:00",
    url: "https://www.bilibili.com/video/BV1vU4y1g7Pg",
    views: "35.2万",
    type: "cardio",
    tags: ["低冲击", "无跑跳", "燃脂"],
    phases: [2],
    replacementType: "A",
    periodSafe: true
  },

  BV1jq9DBBET4: {
    id: "BV1jq9DBBET4",
    title: "15分钟站立有氧，无跑跳低冲击",
    up: "范李猿",
    duration: "15:00",
    url: "https://www.bilibili.com/video/BV1jq9DBBET4",
    views: "19.4万",
    type: "cardio",
    tags: ["无跑跳", "低冲击", "零基础", "站立"],
    phases: [1, 2],
    replacementType: "A",
    periodSafe: true
  },

  BV1CyLb6fEh5: {
    id: "BV1CyLb6fEh5",
    title: "33分钟有氧燃脂，中等强度全身训练",
    up: "一根薯条天天练",
    duration: "33:00",
    url: "https://www.bilibili.com/video/BV1CyLb6fEh5",
    views: "12.7万",
    type: "cardio",
    tags: ["燃脂", "中等强度", "全身"],
    phases: [3, 4],
    replacementType: "A",
    periodSafe: false
  },

  BV1gAL8zoEdD: {
    id: "BV1gAL8zoEdD",
    title: "53分钟大基数有氧，全程站立无跑跳",
    up: "小楠会瘦100斤",
    duration: "53:00",
    url: "https://www.bilibili.com/video/BV1gAL8zoEdD",
    views: "8.3万",
    type: "cardio",
    tags: ["大基数", "无跑跳", "低冲击", "燃脂", "全身"],
    phases: [4],
    replacementType: "A",
    periodSafe: true
  },

  // ========== 力量 Resistance ==========

  BV1njGv6aEPg: {
    id: "BV1njGv6aEPg",
    title: "28分钟坐姿弹力带全身训练，零基础友好",
    up: "98零526",
    duration: "28:00",
    url: "https://www.bilibili.com/video/BV1njGv6aEPg",
    views: "9.5万",
    type: "resistance",
    tags: ["坐姿", "弹力带", "全身", "零基础"],
    phases: [1, 2],
    replacementType: "B",
    periodSafe: true
  },

  BV1QHbxeREMu: {
    id: "BV1QHbxeREMu",
    title: "30分钟坐姿弹力带全身力量训练",
    up: "alexaunited",
    duration: "30:00",
    url: "https://www.bilibili.com/video/BV1QHbxeREMu",
    views: "7.2万",
    type: "resistance",
    tags: ["坐姿", "弹力带", "全身", "零基础"],
    phases: [1, 2],
    replacementType: "B",
    periodSafe: true
  },

  BV1Ew7A6nE2z: {
    id: "BV1Ew7A6nE2z",
    title: "36分钟弹力带入门训练，从零开始",
    up: "孔咻咻Evonne",
    duration: "36:00",
    url: "https://www.bilibili.com/video/BV1Ew7A6nE2z",
    views: "14.8万",
    type: "resistance",
    tags: ["弹力带", "零基础", "全身"],
    phases: [1, 2],
    replacementType: "both",
    periodSafe: true
  },

  BV1UM4m117et: {
    id: "BV1UM4m117et",
    title: "22分钟弹力带力量训练，全身塑形",
    up: "浩云老舅",
    duration: "22:00",
    url: "https://www.bilibili.com/video/BV1UM4m117et",
    views: "6.1万",
    type: "resistance",
    tags: ["弹力带", "全身", "塑形"],
    phases: [2, 3],
    replacementType: "B",
    periodSafe: true
  },

  BV1wkrqByERc: {
    id: "BV1wkrqByERc",
    title: "16分钟弹力带训练，臀腿塑形",
    up: "Mia杨悠",
    duration: "16:00",
    url: "https://www.bilibili.com/video/BV1wkrqByERc",
    views: "11.3万",
    type: "resistance",
    tags: ["弹力带", "臀腿", "零基础"],
    phases: [1, 2],
    replacementType: "B",
    periodSafe: true
  },

  BV1B4YxziEXo: {
    id: "BV1B4YxziEXo",
    title: "27分钟弹力带臀腿训练，深度激活臀部",
    up: "挤时间运动",
    duration: "27:00",
    url: "https://www.bilibili.com/video/BV1B4YxziEXo",
    views: "8.7万",
    type: "resistance",
    tags: ["弹力带", "臀腿", "塑形"],
    phases: [2, 3],
    replacementType: "B",
    periodSafe: true
  },

  BV1Uo28BUEyN: {
    id: "BV1Uo28BUEyN",
    title: "33分钟弹力带全身训练，力量塑形",
    up: "挤时间运动",
    duration: "33:00",
    url: "https://www.bilibili.com/video/BV1Uo28BUEyN",
    views: "10.2万",
    type: "resistance",
    tags: ["弹力带", "全身", "力量"],
    phases: [3, 4],
    replacementType: "both",
    periodSafe: true
  },

  BV1W85XzCEkw: {
    id: "BV1W85XzCEkw",
    title: "30分钟无器械全身力量训练",
    up: "周六野Zoey",
    duration: "30:00",
    url: "https://www.bilibili.com/video/BV1W85XzCEkw",
    views: "45.6万",
    type: "resistance",
    tags: ["无器械", "全身", "零基础"],
    phases: [2, 3],
    replacementType: "both",
    periodSafe: true
  },

  BV1LHRKYsERz: {
    id: "BV1LHRKYsERz",
    title: "25分钟无器械全身训练，居家塑形",
    up: "顾咕咕咕鸡",
    duration: "25:00",
    url: "https://www.bilibili.com/video/BV1LHRKYsERz",
    views: "13.5万",
    type: "resistance",
    tags: ["无器械", "全身", "居家"],
    phases: [2, 3],
    replacementType: "B",
    periodSafe: true
  },

  BV1s5nLzDEw5: {
    id: "BV1s5nLzDEw5",
    title: "25分钟无器械力量训练，徒手全身",
    up: "刘元",
    duration: "25:00",
    url: "https://www.bilibili.com/video/BV1s5nLzDEw5",
    views: "7.8万",
    type: "resistance",
    tags: ["无器械", "全身", "力量"],
    phases: [2, 3],
    replacementType: "B",
    periodSafe: true
  },

  BV1t84y1Q7GX: {
    id: "BV1t84y1Q7GX",
    title: "28分钟坐姿弹力带训练，适合久坐人群",
    up: "想去沙漠看鲸鱼",
    duration: "28:00",
    url: "https://www.bilibili.com/video/BV1t84y1Q7GX",
    views: "5.9万",
    type: "resistance",
    tags: ["坐姿", "弹力带", "零基础", "全身"],
    phases: [1, 2],
    replacementType: "B",
    periodSafe: true
  },

  // ========== 拉伸 / 平衡 Stretch & Balance ==========

  BV1n1LS6SEwT: {
    id: "BV1n1LS6SEwT",
    title: "23分钟全身拉伸放松，缓解肌肉紧张",
    up: "lisa子禾",
    duration: "23:00",
    url: "https://www.bilibili.com/video/BV1n1LS6SEwT",
    views: "23.7万",
    type: "stretch",
    tags: ["拉伸", "放松", "全身", "经期友好"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1a7Me6MEHZ: {
    id: "BV1a7Me6MEHZ",
    title: "10分钟拉伸放松，运动后必备",
    up: "游书庭瘦身有氧",
    duration: "10:00",
    url: "https://www.bilibili.com/video/BV1a7Me6MEHZ",
    views: "16.2万",
    type: "stretch",
    tags: ["拉伸", "放松", "零基础", "经期友好"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV19tMJ6PEWd: {
    id: "BV19tMJ6PEWd",
    title: "14分钟MIZI拉伸放松，全身舒缓",
    up: "开合跳撒金币",
    duration: "14:00",
    url: "https://www.bilibili.com/video/BV19tMJ6PEWd",
    views: "31.5万",
    type: "stretch",
    tags: ["拉伸", "放松", "全身", "经期友好"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1A4gWzJE7X: {
    id: "BV1A4gWzJE7X",
    title: "20分钟全身拉伸，深度放松",
    up: "Jason拉我一把",
    duration: "20:00",
    url: "https://www.bilibili.com/video/BV1A4gWzJE7X",
    views: "12.8万",
    type: "stretch",
    tags: ["拉伸", "放松", "全身", "深度"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1cANb6aEZc: {
    id: "BV1cANb6aEZc",
    title: "3分钟快速拉伸，碎片时间放松",
    up: "甜豆芽芽",
    duration: "3:00",
    url: "https://www.bilibili.com/video/BV1cANb6aEZc",
    views: "8.9万",
    type: "stretch",
    tags: ["拉伸", "快速", "零基础", "经期友好"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1EgEP6oED1: {
    id: "BV1EgEP6oED1",
    title: "9分钟坐姿平衡训练，改善稳定性",
    up: "Jason拉我一把",
    duration: "9:00",
    url: "https://www.bilibili.com/video/BV1EgEP6oED1",
    views: "6.7万",
    type: "balance",
    tags: ["平衡", "坐姿", "零基础", "经期友好"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV1VC81z1ER3: {
    id: "BV1VC81z1ER3",
    title: "15分钟平衡训练，提升核心稳定",
    up: "Jason拉我一把",
    duration: "15:00",
    url: "https://www.bilibili.com/video/BV1VC81z1ER3",
    views: "9.3万",
    type: "balance",
    tags: ["平衡", "核心", "零基础", "经期友好"],
    phases: [1, 2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  BV124GB6HE9z: {
    id: "BV124GB6HE9z",
    title: "15分钟平衡协调训练，进阶稳定性",
    up: "Jason拉我一把",
    duration: "15:00",
    url: "https://www.bilibili.com/video/BV124GB6HE9z",
    views: "5.4万",
    type: "balance",
    tags: ["平衡", "协调", "核心", "经期友好"],
    phases: [2, 3, 4],
    replacementType: "A",
    periodSafe: true
  },

  // ========== 动感单车陪伴 Bike Companion ==========

  BV1u8L766Ej7: {
    id: "BV1u8L766Ej7",
    title: "31分钟动感单车骑行陪伴，跟着节奏踩",
    up: "柠小悦stella",
    duration: "31:00",
    url: "https://www.bilibili.com/video/BV1u8L766Ej7",
    views: "7.1万",
    type: "cardio",
    tags: ["动感单车", "骑行陪伴", "有氧"],
    phases: [2, 3],
    replacementType: "A",
    periodSafe: true
  },

  BV1Cpjs6HETr: {
    id: "BV1Cpjs6HETr",
    title: "54分钟沉浸式骑行风景视频",
    up: "仙林单车爱好者",
    duration: "54:00",
    url: "https://www.bilibili.com/video/BV1Cpjs6HETr",
    views: "4.8万",
    type: "cardio",
    tags: ["动感单车", "骑行陪伴", "沉浸式"],
    phases: [3, 4],
    replacementType: "A",
    periodSafe: true
  }
};


// ============================================================
// 3. 运动计划 EXERCISE_PLAN
//    4个阶段，每阶段一份每周7天日程表
//    使用 IIFE 封装辅助函数，仅暴露 EXERCISE_PLAN 常量
// ============================================================

const EXERCISE_PLAN = (function () {

  // ---- 辅助函数：构建单个运动条目 ----
  function cardio(name, minDesc, optDesc) {
    return { category: "cardio", name: name, minDesc: minDesc, optDesc: optDesc, exerciseId: "" };
  }
  function resistance(name, minDesc, optDesc, exerciseId) {
    return { category: "resistance", name: name, minDesc: minDesc, optDesc: optDesc, exerciseId: exerciseId };
  }
  function balance(minDesc, optDesc) {
    return { category: "balance", name: "平衡训练", minDesc: minDesc, optDesc: optDesc, exerciseId: "" };
  }
  function stretch(minDesc, optDesc) {
    return { category: "stretch", name: "拉伸放松", minDesc: minDesc, optDesc: optDesc, exerciseId: "" };
  }

  // ---- 辅助函数：构建一天的训练日程 ----
  function day(type, exercises, videosTypeA, videosTypeB) {
    return {
      type: type,
      exercises: exercises,
      videosTypeA: videosTypeA,
      videosTypeB: videosTypeB || []
    };
  }

  // 动作名称简写
  var KNEE_EXT = "弹力带坐姿伸膝";
  var LEG_CURL = "弹力带坐姿屈腿";
  var BRIDGE   = "臀桥";
  var PUSHUP   = "跪姿/推墙俯卧撑";
  var SQUAT    = "靠墙静蹲";
  var FACE_PULL = "弹力带面拉";

  // ================================================================
  // 第一阶段（第1-4周）— 基础适应期
  // 有氧：动感单车 10-15min(min)/20min(opt)
  // 力量：3个弹力带动作（坐姿伸膝、坐姿屈腿、臀桥）
  // ================================================================
  var p1 = {
    phase: 1,
    label: "第一阶段：基础适应期",
    weekRange: "第1-4周",
    weeks: [1, 2, 3, 4],
    description: "建立运动习惯，以低强度有氧和基础弹力带力量为主，重点关注动作规范和呼吸节奏。",
    schedule: (function () {
      // 周一/三/五 — 有氧+力量日
      var cr = day("cardio_resistance",
        [
          cardio("动感单车", "10-15分钟", "20分钟"),
          resistance(KNEE_EXT, "1组", "3组", "seated_knee_ext"),
          resistance(LEG_CURL, "1组", "3组", "seated_leg_curl"),
          resistance(BRIDGE,   "1组", "3组", "glute_bridge"),
          balance("15分钟", "15分钟"),
          stretch("5分钟", "5分钟")
        ],
        ["BV1zWuRzZEso", "BV1oZJczcEs9", "BV1L1pqe7EBp", "BV1vJMb6hEq5", "BV1jq9DBBET4"],
        ["BV1njGv6aEPg", "BV1QHbxeREMu", "BV1Ew7A6nE2z", "BV1wkrqByERc", "BV1t84y1Q7GX"]
      );

      // 周二/四 — 有氧主导日
      var cf = day("cardio_focus",
        [
          cardio("动感单车", "10-15分钟", "20分钟"),
          resistance(KNEE_EXT, "1组", "2组", "seated_knee_ext"),
          resistance(LEG_CURL, "1组", "2组", "seated_leg_curl"),
          resistance(BRIDGE,   "1组", "2组", "glute_bridge"),
          balance("15分钟", "15分钟"),
          stretch("5分钟", "5分钟")
        ],
        ["BV1zWuRzZEso", "BV1oZJczcEs9", "BV1L1pqe7EBp", "BV1vJMb6hEq5", "BV1jq9DBBET4"],
        ["BV1njGv6aEPg", "BV1QHbxeREMu", "BV1Ew7A6nE2z", "BV1wkrqByERc", "BV1t84y1Q7GX"]
      );

      // 周六 — 恢复日
      var rec = day("recovery",
        [
          cardio("散步", "15分钟", "20分钟"),
          balance("15分钟", "15分钟"),
          stretch("10分钟", "10分钟")
        ],
        ["BV1a7Me6MEHZ", "BV1cANb6aEZc", "BV19tMJ6PEWd", "BV1n1LS6SEwT"]
      );

      // 周日 — 休息日
      var rest = day("rest",
        [ balance("5分钟", "5分钟") ],
        ["BV1EgEP6oED1", "BV1cANb6aEZc"]
      );

      return {
        monday:    cr,
        tuesday:   cf,
        wednesday: cr,
        thursday:  cf,
        friday:    cr,
        saturday:  rec,
        sunday:    rest
      };
    })()
  };

  // ================================================================
  // 第二阶段（第5-8周）— 强度提升期
  // 有氧：动感单车 20min(min)/30min(opt)
  // 力量：5个动作（+推墙俯卧撑、靠墙静蹲）
  // ================================================================
  var p2 = {
    phase: 2,
    label: "第二阶段：强度提升期",
    weekRange: "第5-8周",
    weeks: [5, 6, 7, 8],
    description: "提升有氧时长至20-30分钟，力量训练新增上肢（推墙俯卧撑）和静力性下肢（靠墙静蹲）动作。",
    schedule: (function () {
      var cr = day("cardio_resistance",
        [
          cardio("动感单车", "20分钟", "30分钟"),
          resistance(KNEE_EXT, "2组", "3组", "seated_knee_ext"),
          resistance(LEG_CURL, "2组", "3组", "seated_leg_curl"),
          resistance(BRIDGE,   "2组", "3组", "glute_bridge"),
          resistance(PUSHUP,   "1组", "3组", "wall_pushup"),
          resistance(SQUAT,    "20秒×1组", "30秒×3组", "wall_squat"),
          balance("15分钟", "15分钟"),
          stretch("5分钟", "5分钟")
        ],
        ["BV1L1pqe7EBp", "BV1vJMb6hEq5", "BV1jq9DBBET4", "BV1vU4y1g7Pg", "BV19xT16qE8c"],
        ["BV1njGv6aEPg", "BV1QHbxeREMu", "BV1Ew7A6nE2z", "BV1UM4m117et", "BV1wkrqByERc", "BV1B4YxziEXo"]
      );

      var cf = day("cardio_focus",
        [
          cardio("动感单车", "20分钟", "30分钟"),
          resistance(KNEE_EXT, "1组", "2组", "seated_knee_ext"),
          resistance(LEG_CURL, "1组", "2组", "seated_leg_curl"),
          resistance(BRIDGE,   "1组", "2组", "glute_bridge"),
          resistance(PUSHUP,   "1组", "2组", "wall_pushup"),
          resistance(SQUAT,    "20秒×1组", "30秒×2组", "wall_squat"),
          balance("15分钟", "15分钟"),
          stretch("5分钟", "5分钟")
        ],
        ["BV1L1pqe7EBp", "BV1vJMb6hEq5", "BV1jq9DBBET4", "BV1vU4y1g7Pg"],
        ["BV1njGv6aEPg", "BV1QHbxeREMu", "BV1Ew7A6nE2z", "BV1wkrqByERc"]
      );

      var rec = day("recovery",
        [
          cardio("散步", "20分钟", "30分钟"),
          balance("15分钟", "15分钟"),
          stretch("10分钟", "10分钟")
        ],
        ["BV1n1LS6SEwT", "BV1a7Me6MEHZ", "BV1A4gWzJE7X", "BV19tMJ6PEWd"]
      );

      var rest = day("rest",
        [ balance("5分钟", "5分钟") ],
        ["BV1EgEP6oED1", "BV1VC81z1ER3", "BV1cANb6aEZc"]
      );

      return {
        monday:    cr,
        tuesday:   cf,
        wednesday: cr,
        thursday:  cf,
        friday:    cr,
        saturday:  rec,
        sunday:    rest
      };
    })()
  };

  // ================================================================
  // 第三阶段（第9-12周）— 进阶强化期
  // 有氧：动感单车（含间歇训练）30min(min)/40min(opt)
  // 力量：全部6个动作（+弹力带面拉）
  // ================================================================
  var p3 = {
    phase: 3,
    label: "第三阶段：进阶强化期",
    weekRange: "第9-12周",
    weeks: [9, 10, 11, 12],
    description: "有氧引入间歇训练（30-40分钟），力量训练完成全部6个动作，全面提升体能和肌力。",
    schedule: (function () {
      var cr = day("cardio_resistance",
        [
          cardio("动感单车（含间歇训练）", "30分钟", "40分钟"),
          resistance(KNEE_EXT,  "2组", "3组", "seated_knee_ext"),
          resistance(LEG_CURL,  "2组", "3组", "seated_leg_curl"),
          resistance(BRIDGE,    "2组", "3组", "glute_bridge"),
          resistance(PUSHUP,    "2组", "3组", "wall_pushup"),
          resistance(SQUAT,     "30秒×2组", "30秒×3组", "wall_squat"),
          resistance(FACE_PULL, "2组", "3组", "band_face_pull"),
          balance("15分钟", "15分钟"),
          stretch("10分钟", "10分钟")
        ],
        ["BV19xT16qE8c", "BV1Y88SehEcU", "BV1QY4tzmEf4", "BV1qd4y1b7ar", "BV1u8L766Ej7"],
        ["BV1UM4m117et", "BV1B4YxziEXo", "BV1Uo28BUEyN", "BV1W85XzCEkw", "BV1LHRKYsERz", "BV1s5nLzDEw5"]
      );

      var cf = day("cardio_focus",
        [
          cardio("动感单车（含间歇训练）", "30分钟", "40分钟"),
          resistance(KNEE_EXT,  "1组", "2组", "seated_knee_ext"),
          resistance(LEG_CURL,  "1组", "2组", "seated_leg_curl"),
          resistance(BRIDGE,    "1组", "2组", "glute_bridge"),
          resistance(PUSHUP,    "1组", "2组", "wall_pushup"),
          resistance(SQUAT,     "30秒×1组", "30秒×2组", "wall_squat"),
          resistance(FACE_PULL, "1组", "2组", "band_face_pull"),
          balance("15分钟", "15分钟"),
          stretch("10分钟", "10分钟")
        ],
        ["BV19xT16qE8c", "BV1Y88SehEcU", "BV1vU4y1g7Pg"],
        ["BV1UM4m117et", "BV1B4YxziEXo", "BV1W85XzCEkw"]
      );

      var rec = day("recovery",
        [
          cardio("散步", "30分钟", "40分钟"),
          balance("15分钟", "15分钟"),
          stretch("15分钟", "15分钟")
        ],
        ["BV1n1LS6SEwT", "BV1A4gWzJE7X", "BV19tMJ6PEWd", "BV1a7Me6MEHZ"]
      );

      var rest = day("rest",
        [ balance("5分钟", "5分钟"), stretch("5分钟", "5分钟") ],
        ["BV1VC81z1ER3", "BV124GB6HE9z", "BV1EgEP6oED1"]
      );

      return {
        monday:    cr,
        tuesday:   cf,
        wednesday: cr,
        thursday:  cf,
        friday:    cr,
        saturday:  rec,
        sunday:    rest
      };
    })()
  };

  // ================================================================
  // 第四阶段（第13周起）— 持续进步期
  // 有氧：动感单车（含间歇训练）40min(min)/50min(opt)
  // 力量：全部6个动作，组数和时长进阶
  // ================================================================
  var p4 = {
    phase: 4,
    label: "第四阶段：持续进步期",
    weekRange: "第13周起",
    weeks: [13],
    description: "有氧达到40分钟以上，力量训练组数全面进阶，保持长期运动习惯，持续提升心肺和肌力。",
    schedule: (function () {
      var cr = day("cardio_resistance",
        [
          cardio("动感单车（含间歇训练）", "40分钟", "50分钟"),
          resistance(KNEE_EXT,  "3组", "4组", "seated_knee_ext"),
          resistance(LEG_CURL,  "3组", "4组", "seated_leg_curl"),
          resistance(BRIDGE,    "3组", "4组", "glute_bridge"),
          resistance(PUSHUP,    "3组", "4组", "wall_pushup"),
          resistance(SQUAT,     "30秒×3组", "40秒×4组", "wall_squat"),
          resistance(FACE_PULL, "3组", "4组", "band_face_pull"),
          balance("15分钟", "15分钟"),
          stretch("10分钟", "10分钟")
        ],
        ["BV1QY4tzmEf4", "BV1qd4y1b7ar", "BV1CyLb6fEh5", "BV1gAL8zoEdD", "BV1u8L766Ej7", "BV1Cpjs6HETr"],
        ["BV1Uo28BUEyN", "BV1W85XzCEkw", "BV1LHRKYsERz", "BV1s5nLzDEw5"]
      );

      var cf = day("cardio_focus",
        [
          cardio("动感单车（含间歇训练）", "40分钟", "50分钟"),
          resistance(KNEE_EXT,  "2组", "3组", "seated_knee_ext"),
          resistance(LEG_CURL,  "2组", "3组", "seated_leg_curl"),
          resistance(BRIDGE,    "2组", "3组", "glute_bridge"),
          resistance(PUSHUP,    "2组", "3组", "wall_pushup"),
          resistance(SQUAT,     "30秒×2组", "40秒×3组", "wall_squat"),
          resistance(FACE_PULL, "2组", "3组", "band_face_pull"),
          balance("15分钟", "15分钟"),
          stretch("10分钟", "10分钟")
        ],
        ["BV1QY4tzmEf4", "BV1CyLb6fEh5", "BV1u8L766Ej7"],
        ["BV1Uo28BUEyN", "BV1W85XzCEkw"]
      );

      var rec = day("recovery",
        [
          cardio("散步", "40分钟", "50分钟"),
          balance("15分钟", "15分钟"),
          stretch("15分钟", "15分钟")
        ],
        ["BV1n1LS6SEwT", "BV1A4gWzJE7X", "BV19tMJ6PEWd"]
      );

      var rest = day("rest",
        [ balance("10分钟", "10分钟"), stretch("5分钟", "5分钟") ],
        ["BV1VC81z1ER3", "BV124GB6HE9z", "BV1EgEP6oED1"]
      );

      return {
        monday:    cr,
        tuesday:   cf,
        wednesday: cr,
        thursday:  cf,
        friday:    cr,
        saturday:  rec,
        sunday:    rest
      };
    })()
  };

  return {
    phases: [p1, p2, p3, p4]
  };
})();
