
import { QuestionType } from '../../types';

interface QuestionContent {
  id: number;
  type: QuestionType;
  content: string;
}

export const blankQuestions: QuestionContent[] = [
  {
    id: 31,
    type: 'blank',
    content: "已知信号 $f(t)$ 的频谱函数在 $(-500Hz, 500Hz)$ 区间内不为零，现对 $f(t)$ 进行理想取样，则奈奎斯特取样频率为_____ Hz。",
  },
  {
    id: 32,
    type: 'blank',
    content: "$\\int_{-\\infty}^{t} \\delta(\\tau)\\cos\\tau d\\tau = $ _____",
  },
  {
    id: 33,
    type: 'blank',
    content: "$(1 - \\cos t) * \\delta(t - \\frac{\\pi}{2}) = $ _____",
  },
  {
    id: 34,
    type: 'blank',
    content: "$\\delta(t) * \\cos\\omega_0(t-\\tau) = $ _____",
  },
  {
    id: 35,
    type: 'blank',
    content: "$F(\\omega)e^{-j\\omega t_0}$ 的傅里叶反变换为_____， $F(\\omega - \\omega_0)$ 的反变换为_____。",
  },
  {
    id: 36,
    type: 'blank',
    content: "已知 $X(z) = \\frac{-1.5z}{z^2 - 2.5z + 1}$，若收敛域 $|z|>2$，则逆变换为 $x(n)=$_____；若收敛域 $0.5<|z|<2$，则逆变换为 $x(n)=$_____。",
  },
  {
    id: 37,
    type: 'blank',
    content: "单位阶跃序列 $u(n)$ 与单位样值序列 $\\delta(n)$ 的关系为 $u(n) = $ _____。",
  },
  {
    id: 38,
    type: 'blank',
    content: "$\\delta(t) * e^{-at} = $ _____",
  },
  {
    id: 39,
    type: 'blank',
    content: "设某因果离散系统的系统函数为 $H(z) = \\frac{z}{z+a}$，要使系统稳定，则 a 应满足_____。",
  },
  {
    id: 40,
    type: 'blank',
    content: "$\\int_{-\\infty}^{\\infty} (1 - \\cos t)\\delta(t - \\frac{\\pi}{2})dt = $ _____",
  },
  {
    id: 41,
    type: 'blank',
    content: "$\\int_{-\\infty}^{t} \\delta(\\tau)\\cos\\omega_0\\tau d\\tau = $ _____",
  },
  {
    id: 42,
    type: 'blank',
    content: "$\\int_{-\\infty}^{+\\infty} \\delta(t+1)\\cos\\omega_0 t dt = $ _____",
  },
  {
    id: 43,
    type: 'blank',
    content: "信号 $\\cos 2\\pi t + \\sin 5\\pi t$ 的周期为_____。",
  },
  {
    id: 44,
    type: 'blank',
    content: "$\\frac{d}{dt}[e^{-t}u(t) * u(t)] = $ _____",
  },
  {
    id: 45,
    type: 'blank',
    content: "$\\int_{-\\infty}^{\\infty} \\delta(t)e^{-at} dt = $ _____",
  },
  {
    id: 46,
    type: 'blank',
    content: "已知 Z 变换 $Z[x(n)] = \\frac{1}{1-3z^{-1}}$，若收敛域 $|z|>3$，则逆变换为 $x(n)=$_____；若收敛域 $|z|<3$，则逆变换为 $x(n)=$_____。",
  },
  {
    id: 47,
    type: 'blank',
    content: "$\\frac{d}{dt}[u(t) * u(t)] = $ _____",
  },
  {
    id: 48,
    type: 'blank',
    content: "\\cos t \\cdot \\delta(t-\\pi) = _____",
  },
  {
    id: 49,
    type: 'blank',
    content: "$\\delta(t) \\cdot \\cos\\omega_0(t-\\tau) = $ _____",
  },
  {
    id: 50,
    type: 'blank',
    content: "$\\int_{-\\infty}^{\\infty} \\tau\\delta(\\tau-2) d\\tau = $ _____",
  },
  {
    id: 51,
    type: 'blank',
    content: "函数 $f(t) = e^{-t}\\sin(2t)$ 的单边拉普拉斯变换为 $F(s)=$_____。函数 $F(s) = \\frac{1}{s^2-3s+2}$ 的逆变换为：_____。",
  },
  {
    id: 52,
    type: 'blank',
    content: "$\\delta(t+1) * \\cos\\omega_0 t = $ _____",
  },
  {
    id: 53,
    type: 'blank',
    content: "$\\int_{-\\infty}^{+\\infty} \\delta(t)\\cos\\omega_0 t dt = $ _____",
  },
  {
    id: 54,
    type: 'blank',
    content: "函数 $f(t) = te^{-2t}$ 的单边拉普拉斯变换为 $F(s)=$_____，函数 $F(s) = \\frac{3s}{(s+4)(s+2)}$ 的逆变换为：_____。",
  },
  {
    id: 55,
    type: 'blank',
    content: "$\\int_{-\\infty}^{t} \\tau\\delta(\\tau-2) d\\tau = $ _____",
  },
  {
    id: 56,
    type: 'blank',
    content: "已知系统函数 $H(s) = \\frac{1}{s^2 + (1-k)s + k + 1}$，要使系统稳定，试确定 k 值的范围(_____)。",
  },
  {
    id: 57,
    type: 'blank',
    content: "$\\delta(t) \\cdot \\cos t = $ _____",
  },
  {
    id: 58,
    type: 'blank',
    content: "$\\int_{-\\infty}^{t} \\delta(\\tau+1) \\cos \\omega_0 \\tau d\\tau = $ _____",
  },
  {
    id: 59,
    type: 'blank',
    content: "若 $f(t)$ 的傅里叶变换为 $F(\\omega)$，则 $f(t)\\cos 200t$ 的傅里叶变换为_____， $tf(t)$ 的傅里叶变换为_____， $f(3t-3)$ 的傅里叶变换为_____， $f(2t-5)$ 的傅里叶变换为_____， $f(3-2t)$ 的傅里叶变换为_____。",
  },
  {
    id: 60,
    type: 'blank',
    content: "某离散系统的系统函数 $H(z) = \\frac{0.5z+1}{z^2 - kz - 0.25}$，欲使其稳定的 k 的取值范围是_____。",
  },
  {
    id: 61,
    type: 'blank',
    content: "$\\delta(t) * \\cos\\omega_0(t-\\tau) = $ _____",
  },
  {
    id: 62,
    type: 'blank',
    content: "频谱 $\\delta(\\omega - 2)$ 对应的时间函数为_____。",
  },
  {
    id: 63,
    type: 'blank',
    content: "已知 $X(z) = \\frac{z}{z-1}$，若收敛域 $|z|>1$，则逆变换为 $x(n)=$_____；若收敛域 $|z|<1$，则逆变换为 $x(n)=$_____。",
  },
  {
    id: 64,
    type: 'blank',
    content: "$\\delta(t) \\cdot e^{-at} = $ _____",
  },
  {
    id: 65,
    type: 'blank',
    content: "已知变换 $Z[x(n)] = \\frac{z}{(z-1)(z-2)}$，若收敛域 $|z|>2$，则逆变换为 $x(n)=$_____；若收敛域 $|z|<1$，则逆变换为 $x(n)=$_____；若收敛域 $1<|z|<2$，则逆变换为 $x(n)=$_____。",
  },
  {
    id: 66,
    type: 'blank',
    content: "具有单位样值响应 $h(n)$ 的 LTI 系统稳定的充要条件是_____。",
  },
  {
    id: 67,
    type: 'blank',
    content: "$\\int_{-\\infty}^{+\\infty} \\delta(t) \\cdot \\cos t dt = $ _____",
  },
  {
    id: 68,
    type: 'blank',
    content: "设 $f(t)$ 的最高频率分量为 1KHz，$f(2t)$ 的奈奎斯特频率是_____KHz，$f^3(t)$ 的奈奎斯特频率是_____KHz，$f(t)$ 与 $f(2t)$ 卷积函数的奈奎斯特频率是_____KHz。",
  },
  {
    id: 69,
    type: 'blank',
    content: "$(1 - \\cos t)\\delta(t - \\frac{\\pi}{2}) = $ _____",
  }
];
