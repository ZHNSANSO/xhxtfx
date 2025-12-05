
import { Option, QuestionType } from '../../types';

interface QuestionContent {
  id: number;
  type: QuestionType;
  content: string;
  options?: Option[];
}

export const choiceQuestions: QuestionContent[] = [
  {
    id: 1,
    type: 'choice',
    content: "若 \\(F_1(j\\omega) = F[f_1(t)]\\)，则 \\(F_2(j\\omega) = F[f_1(4-2t)] = \\) 。",
    options: [
      { id: "A", label: "A", content: "\\(\\frac{1}{2}F_1(j\\omega)e^{-j4\\omega}\\)" },
      { id: "B", label: "B", content: "\\(\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j4\\omega}\\)" },
      { id: "C", label: "C", content: "\\(F_1(-j\\omega)e^{-j\\omega}\\)" },
      { id: "D", label: "D", content: "\\(\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j2\\omega}\\)" }
    ]
  },
  {
    id: 2,
    type: 'choice',
    content: "非周期连续信号被理想冲激取样后，取样信号的频谱 \\(F_s(j\\omega)\\) 是。",
    options: [
      { id: "A", label: "A", content: "离散频谱" },
      { id: "B", label: "B", content: "连续频谱" },
      { id: "C", label: "C", content: "连续周期频谱" },
      { id: "D", label: "D", content: "不确定，要依赖于信号而变化" }
    ]
  },
  {
    id: 3,
    type: 'choice',
    content: "已知 \\(f(t)\\) 的频带宽度为 \\(\\Delta\\omega\\)，则 \\(f(2t-4)\\) 的频带宽度为。",
    options: [
      { id: "A", label: "A", content: "\\(2\\Delta\\omega\\)" },
      { id: "B", label: "B", content: "\\(\\frac{1}{2}\\Delta\\omega\\)" },
      { id: "C", label: "C", content: "\\(2(\\Delta\\omega-4)\\)" },
      { id: "D", label: "D", content: "\\(2(\\Delta\\omega-2)\\)" }
    ]
  },
  {
    id: 4,
    type: 'choice',
    content: "\\(\\int_{-3}^{3} \\cos\\frac{\\pi}{2}t \\cdot \\delta(t+2)dt\\) 等于。",
    options: [
      { id: "A", label: "A", content: "0" },
      { id: "B", label: "B", content: "-1" },
      { id: "C", label: "C", content: "2" },
      { id: "D", label: "D", content: "-2" }
    ]
  },
  {
    id: 5,
    type: 'choice',
    content: "信号 \\(x(t) = 3\\cos(4t + \\frac{\\pi}{3})\\) 的周期是。",
    options: [
      { id: "A", label: "A", content: "\\(2\\pi\\)" },
      { id: "B", label: "B", content: "\\(\\pi\\)" },
      { id: "C", label: "C", content: "\\(\\frac{\\pi}{2}\\)" },
      { id: "D", label: "D", content: "\\(2\\pi\\)" }
    ]
  },
  {
    id: 6,
    type: 'choice',
    content: "信号 \\(x(n) = 2\\cos(\\frac{n\\pi}{4}) + \\sin(\\frac{n\\pi}{8}) - 2\\cos(\\frac{n\\pi}{2} + \\frac{\\pi}{6})\\) 的周期是。",
    options: [
      { id: "A", label: "A", content: "8" },
      { id: "B", label: "B", content: "16" },
      { id: "C", label: "C", content: "2" },
      { id: "D", label: "D", content: "4" }
    ]
  },
  {
    id: 7,
    type: 'choice',
    content: "设当 \\(n<-2\\) 和 \\(n>4\\) 时，\\(x(n)=0\\)，则序列 \\(x(n-3)\\) 为零的 \\(n\\) 值为。",
    options: [
      { id: "A", label: "A", content: "\\(n=3\\)" },
      { id: "B", label: "B", content: "\\(n<7\\)" },
      { id: "C", label: "C", content: "\\(n>7\\)" },
      { id: "D", label: "D", content: "\\(n<1\\) 和 \\(n>7\\)" }
    ]
  },
  {
    id: 8,
    type: 'choice',
    content: "连续时间信号 \\(f(t)\\) 的占有频带为 \\(0 \\sim 10\\text{KHz}\\)，经均匀抽样后，构成一离散时间信号，为保证能从离散信号中恢复原信号 \\(f(t)\\)，则抽样周期的值最大不超过。",
    options: [
      { id: "A", label: "A", content: "\\(10^{-4}\\text{s}\\)" },
      { id: "B", label: "B", content: "\\(10^{-5}\\text{s}\\)" },
      { id: "C", label: "C", content: "\\(5\\times 10^{-5}\\text{s}\\)" },
      { id: "D", label: "D", content: "\\(10^{-3}\\text{s}\\)" }
    ]
  },
  {
    id: 9,
    type: 'choice',
    content: "设当 \\(t<3\\) 时，\\(x(t)=0\\)，则使 \\(x(1-t) \\cdot x(2-t) = 0\\) 的 \\(t\\) 值为。",
    options: [
      { id: "A", label: "A", content: "\\(t>2\\) 或 \\(t>-1\\)" },
      { id: "B", label: "B", content: "\\(t=1\\) 和 \\(t=2\\)" },
      { id: "C", label: "C", content: "\\(t>-1\\)" },
      { id: "D", label: "D", content: "\\(t>-2\\)" }
    ]
  },
  {
    id: 10,
    type: 'choice',
    content: "如果一离散时间系统的系统函数 \\(H(z)\\) 只有一个在单位圆上实数为1的极点，则它的 \\(h(n)\\) 应是。",
    options: [
      { id: "A", label: "A", content: "\\(u(n)\\)" },
      { id: "B", label: "B", content: "\\(-u(n)\\)" },
      { id: "C", label: "C", content: "\\((-1)^n u(n)\\)" },
      { id: "D", label: "D", content: "1" }
    ]
  },
  {
    id: 11,
    type: 'choice',
    content: "线性时不变系统输出中的自由响应的形式由决定",
    options: [
      { id: "A", label: "A", content: "系统函数极点的位置" },
      { id: "B", label: "B", content: "激励信号的形式" },
      { id: "C", label: "C", content: "系统起始状态" },
      { id: "D", label: "D", content: "以上均不对" }
    ]
  },
  {
    id: 12,
    type: 'choice',
    content: "已知信号 \\(f(t)\\) 的频带宽度为 \\(\\Delta\\omega\\)，则 \\(f(3t-2)\\) 的频带宽度为_____。",
    options: [
      { id: "A", label: "A", content: "\\(3\\Delta\\omega\\)" },
      { id: "B", label: "B", content: "\\(\\frac{\\Delta\\omega}{3}\\)" },
      { id: "C", label: "C", content: "\\(\\frac{\\Delta\\omega-2}{3}\\)" },
      { id: "D", label: "D", content: "\\(\\frac{\\Delta\\omega-6}{3}\\)" }
    ]
  },
  {
    id: 13,
    type: 'choice',
    content: "设当 \\(t<3\\) 时，\\(x(t)=0\\)，则使 \\(x(\\frac{t}{3})=0\\) 的 \\(t\\) 值为。",
    options: [
      { id: "A", label: "A", content: "\\(t>3\\)" },
      { id: "B", label: "B", content: "\\(t=0\\)" },
      { id: "C", label: "C", content: "\\(t<9\\)" },
      { id: "D", label: "D", content: "\\(t=3\\)" }
    ]
  },
  {
    id: 14,
    type: 'choice',
    content: "\\(\\int_{-\\infty}^{t} \\delta(\\tau)\\frac{\\sin 2\\tau}{\\tau} d\\tau = \\) 。",
    options: [
      { id: "A", label: "A", content: "\\(2u(t)\\)" },
      { id: "B", label: "B", content: "\\(4\\delta(t)\\)" },
      { id: "C", label: "C", content: "4" },
      { id: "D", label: "D", content: "\\(4u(t)\\)" }
    ]
  },
  {
    id: 15,
    type: 'choice',
    content: "单边拉普拉斯变换 \\(F(s) = \\frac{2s+1}{s^2}e^{-2s}\\) 的原函数等于。",
    options: [
      { id: "A", label: "A", content: "\\(tu(t)\\)" },
      { id: "B", label: "B", content: "\\(tu(t-2)\\)" },
      { id: "C", label: "C", content: "\\((t-2)u(t)\\)" },
      { id: "D", label: "D", content: "\\((t-2)u(t-2)\\)" }
    ]
  },
  {
    id: 16,
    type: 'choice',
    content: "已知系统的激励 \\(e(t)\\) 与响应 \\(r(t)\\) 的关系为：\\(r(t) = e(1-t)\\) 则该系统为。",
    options: [
      { id: "A", label: "A", content: "线性时不变系统" },
      { id: "B", label: "B", content: "线性时变系统" },
      { id: "C", label: "C", content: "非线性时不变系统" },
      { id: "D", label: "D", content: "非线性时变系统" }
    ]
  },
  {
    id: 17,
    type: 'choice',
    content: "连续周期信号 \\(f(t)\\) 的频谱 \\(F(j\\omega)\\) 的特点是。",
    options: [
      { id: "A", label: "A", content: "周期、连续频谱" },
      { id: "B", label: "B", content: "周期、离散频谱" },
      { id: "C", label: "C", content: "连续、非周期频谱" },
      { id: "D", label: "D", content: "离散、非周期频谱" }
    ]
  },
  {
    id: 18,
    type: 'choice',
    content: "若系统的起始状态为0，在 \\(x(t)\\) 的激励下，所得的响应为。",
    options: [
      { id: "A", label: "A", content: "强迫响应" },
      { id: "B", label: "B", content: "稳态响应" },
      { id: "C", label: "C", content: "暂态响应" },
      { id: "D", label: "D", content: "零状态响应" }
    ]
  },
  {
    id: 19,
    type: 'choice',
    content: "周期序列 \\(2\\cos(\\frac{3\\pi n}{4} + \\frac{\\pi}{6}) + \\sin(\\frac{\\pi n}{4})\\) 的周期 N 等于。",
    options: [
      { id: "A", label: "A", content: "8" },
      { id: "B", label: "B", content: "8/3" },
      { id: "C", label: "C", content: "4" },
      { id: "D", label: "D", content: "\\(\\frac{\\pi}{4}\\)" }
    ]
  },
  {
    id: 20,
    type: 'choice',
    content: "已知系统的激励 \\(e(t)\\) 与响应 \\(r(t)\\) 的关系为：\\(r(t) = e^2(t)\\) 则该系统为。",
    options: [
      { id: "A", label: "A", content: "线性时不变系统" },
      { id: "B", label: "B", content: "线性时变系统" },
      { id: "C", label: "C", content: "非线性时不变系统" },
      { id: "D", label: "D", content: "非线性时变系统" }
    ]
  },
  {
    id: 21,
    type: 'choice',
    content: "已知 Z 变换 \\(Z[x(n)] = \\frac{1}{1-3z^{-1}}\\) ，收敛域 \\(|z|>3\\)，则逆变换 \\(x(n)\\) 为。",
    options: [
      { id: "A", label: "A", content: "\\(3^n u(n)\\)" },
      { id: "B", label: "B", content: "\\(3^n u(n-1)\\)" },
      { id: "C", label: "C", content: "\\(-3^n u(-n)\\)" },
      { id: "D", label: "D", content: "\\(-3^{-n} u(-n-1)\\)" }
    ]
  },
  {
    id: 22,
    type: 'choice',
    content: "已知信号 \\(f(t) = Sa(100t) + Sa^2(60t)\\) ，则奈奎斯特取样频率 \\(f_s\\) 为。",
    options: [
      { id: "A", label: "A", content: "\\(\\frac{50}{\\pi}\\)" },
      { id: "B", label: "B", content: "\\(\\frac{120}{\\pi}\\)" },
      { id: "C", label: "C", content: "\\(\\frac{100}{\\pi}\\)" },
      { id: "D", label: "D", content: "\\(\\frac{60}{\\pi}\\)" }
    ]
  },
  {
    id: 23,
    type: 'choice',
    content: "设当 \\(t<3\\) 时，\\(x(t)=0\\)，则使 \\(x(1-t) + x(2-t) = 0\\) 的 \\(t\\) 值为。",
    options: [
      { id: "A", label: "A", content: "\\(t>-2\\) 或 \\(t>-1\\)" },
      { id: "B", label: "B", content: "\\(t=1\\) 和 \\(t=2\\)" },
      { id: "C", label: "C", content: "\\(t>-1\\)" },
      { id: "D", label: "D", content: "\\(t>-2\\)" }
    ]
  },
  {
    id: 24,
    type: 'choice',
    content: "信号 \\(f(t)=Sa(100t)\\)，其最低取样频率 \\(f_s\\) 为。",
    options: [
      { id: "A", label: "A", content: "\\(\\frac{100}{\\pi}\\)" },
      { id: "B", label: "B", content: "\\(\\frac{200}{\\pi}\\)" },
      { id: "C", label: "C", content: "\\(\\frac{\\pi}{100}\\)" },
      { id: "D", label: "D", content: "\\(\\frac{\\pi}{200}\\)" }
    ]
  },
  {
    id: 25,
    type: 'choice',
    content: "已知 \\(x(n)\\) 的 Z 变换 \\(X(z) = \\frac{1}{(z+\\frac{1}{2})(z+2)}\\)，\\(X(z)\\) 的收敛域为时，\\(x(n)\\) 为因果信号。",
    options: [
      { id: "A", label: "A", content: "\\(|z|>0.5\\)" },
      { id: "B", label: "B", content: "\\(|z|<0.5\\)" },
      { id: "C", label: "C", content: "\\(|z|>2\\)" },
      { id: "D", label: "D", content: "\\(0.5<|z|<2\\)" }
    ]
  },
  {
    id: 26,
    type: 'choice',
    content: "一个因果稳定的离散系统，其 \\(H(z)\\) 的全部极点须分布在 z 平面的。",
    options: [
      { id: "A", label: "A", content: "单位圆外" },
      { id: "B", label: "B", content: "单位圆内" },
      { id: "C", label: "C", content: "单位圆上" },
      { id: "D", label: "D", content: "单位圆内或单位圆上" }
    ]
  },
  {
    id: 27,
    type: 'choice',
    content: "设当 \\(n<-2\\) 和 \\(n>4\\) 时，\\(x(n)=0\\)，则序列 \\(x(-n-2)\\) 为零的 \\(n\\) 值为。",
    options: [
      { id: "A", label: "A", content: "\\(n>0\\)" },
      { id: "B", label: "B", content: "\\(n>0\\) 和 \\(n<-6\\)" },
      { id: "C", label: "C", content: "\\(n=-2\\) 和 \\(n>0\\)" },
      { id: "D", label: "D", content: "\\(n=-2\\)" }
    ]
  },
  {
    id: 28,
    type: 'choice',
    content: "已知系统的系统函数为 \\(H(s) = \\frac{s+2}{s(s^2+3s+2)}\\)，求系统的自然频率为。",
    options: [
      { id: "A", label: "A", content: "-1, -2" },
      { id: "B", label: "B", content: "0, -1, -2" },
      { id: "C", label: "C", content: "0, -1" },
      { id: "D", label: "D", content: "-2" }
    ]
  },
  {
    id: 29,
    type: 'choice',
    content: "已知 \\(x(n)\\) 的 Z 变换 \\(X(z) = \\frac{1}{(z+1)(z+2)}\\)，\\(X(z)\\) 的收敛域为时，\\(x(n)\\) 为因果信号。",
    options: [
      { id: "A", label: "A", content: "\\(|z|>1\\)" },
      { id: "B", label: "B", content: "\\(|z|<1\\)" },
      { id: "C", label: "C", content: "\\(|z|>2\\)" },
      { id: "D", label: "D", content: "\\(1<|z|<2\\)" }
    ]
  },
  {
    id: 30,
    type: 'choice',
    content: "下列各表达式中正确的是",
    options: [
      { id: "A", label: "A", content: "\\(\\delta(2t) = \\delta(t)\\)" },
      { id: "B", label: "B", content: "\\(\\delta(2t) = \\frac{1}{2}\\delta(t)\\)" },
      { id: "C", label: "C", content: "\\(\\delta(2t) = 2\\delta(t)\\)" },
      { id: "D", label: "D", content: "\\(2\\delta(t) = \\frac{1}{2}\\delta(2t)\\)" }
    ]
  }
];
