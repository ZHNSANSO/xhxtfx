
import { QuestionType } from '../../types';

interface QuestionContent {
  id: number;
  type: QuestionType;
  content: string;
}

export const judgementQuestions: QuestionContent[] = [
  { id: 70, type: 'judgement', content: "若 LTI 系统的单位冲激响应为 \\(h(t) = e^t u(t)\\)，则该系统是因果的。" },
  { id: 71, type: 'judgement', content: "若 \\(r(t) = e(t) * h(t)\\)，则有 \\(r(2t) = e(2t) * h(2t)\\) (*表示卷积运算)。" },
  { id: 72, type: 'judgement', content: "若 LTI 系统的单位冲激响应为 \\(h(n) = 0.5 u(n)\\)，则该系统是不稳定的。" },
  { id: 73, type: 'judgement', content: "非周期的取样时间信号，其频谱是离散的、周期的。" },
  { id: 74, type: 'judgement', content: "奇函数加上直流后，傅立叶级数中仍含有正弦分量。" },
  { id: 75, type: 'judgement', content: "若 \\(f_1(t)\\) 和 \\(f_2(t)\\) 均为奇函数，则卷积 \\(f_1(t) * f_2(t)\\) 为偶函数。" },
  { id: 76, type: 'judgement', content: "一个信号存在拉氏变换，就一定存在傅氏变换。" },
  { id: 77, type: 'judgement', content: "离散因果系统，若系统函数 H(z) 的全部极点在 z 平面的左半平面，则系统稳定。" },
  { id: 78, type: 'judgement', content: "若 x(t/2) 是周期的，则 x(t) 也是周期的。" },
  { id: 79, type: 'judgement', content: "若 LTI 系统的单位冲激响应为 \\(h(n) = (\\frac{1}{4})^n u(2-n)\\)，则该系统是因果的。" },
  { id: 80, type: 'judgement', content: "已知 \\(x_1(n) = u(n+1) - u(n-1)\\), \\(x_2(n) = u(n-1) - u(n-2)\\)，则 \\(x_1(n)*x_2(n)\\) 的非零值区间为 (0, 3)。" },
  { id: 81, type: 'judgement', content: "若 LTI 系统的单位冲激响应为 \\(h(t) = e^{-t}u(t)\\)，则该系统是不稳定的。" },
  { id: 82, type: 'judgement', content: "奇函数加上直流后，傅氏级数中仍含有正弦分量。" },
  { id: 83, type: 'judgement', content: "周期性冲激序列的傅里叶变换也是周期性冲激函数。" },
  { id: 84, type: 'judgement', content: "对连续时间系统而言，存在 \\(H(j\\omega) = H(s)|_{s=j\\omega}\\)。" },
  { id: 85, type: 'judgement', content: "两个线性时不变系统级联构成的系统也是线性时不变的。" },
  { id: 86, type: 'judgement', content: "若 x(2t) 是周期的，则 x(t) 也是周期的。" },
  { id: 87, type: 'judgement', content: "周期奇谐函数的傅立叶级数中不含余弦分量。" },
  { id: 88, type: 'judgement', content: "两个非线性系统级联构成的系统也是非线性的。" },
  { id: 89, type: 'judgement', content: "若周期信号 f(t) 是奇谐函数，则其傅氏级数中不会含有直流分量。" },
  { id: 90, type: 'judgement', content: "若 x(t) 和 y(t) 均为奇函数，则 x(t) 与 y(t) 的卷积为偶函数。" },
  { id: 91, type: 'judgement', content: "若 x(t) 是周期的，则 x(t/2) 也是周期的。" },
  { id: 92, type: 'judgement', content: "若 LTI 系统的单位冲激响应为 \\(h(t) = u(t-2)\\)，则该系统不是因果的。" },
  { id: 93, type: 'judgement', content: "周期性的连续时间信号，其频谱是离散的、非周期的。" },
  { id: 94, type: 'judgement', content: "一个信号存在傅里叶变换，就一定存在双边拉式变换。" },
  { id: 95, type: 'judgement', content: "利用卷积求零状态响应只适用于线性时不变系统。" },
  { id: 96, type: 'judgement', content: "差分方程 \\(y(n) = (n+1)x(n+1)\\) 描述的系统是因果的。" },
  { id: 97, type: 'judgement', content: "序列 \\(x(n) = \\cos(n\\omega_0)\\) 是周期序列，其周期为 \\(2\\pi / \\omega_0\\)。" },
  { id: 98, type: 'judgement', content: "一个信号存在傅里叶变换，就一定存在单边拉式变换。" },
  { id: 99, type: 'judgement', content: "若 x(t) 是周期的，则 x(2t) 也是周期的。" },
  { id: 100, type: 'judgement', content: "离散因果系统，若 H(z) 的所有极点在单位圆外，则系统稳定。" },
  { id: 101, type: 'judgement', content: "对连续时间信号进行抽样得到的抽样信号，其频谱是周期的。" },
  { id: 102, type: 'judgement', content: "若 \\(r(t) = e(t) * h(t)\\)，则有 \\(r(t-t_0) = e(t-t_0) * h(t-t_0)\\)。" },
  { id: 103, type: 'judgement', content: "已知 \\(f_1(t)\\) 和 \\(f_2(t)\\) 非零值区间分别为 (1,3) 和 (2,5)，则 \\(f_1(t) * f_2(t)\\) 的非零值区间为 (3,8)。" }
];
