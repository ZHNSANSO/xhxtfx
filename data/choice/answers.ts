
interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const choiceAnswers: Record<number, QuestionAnswer> = {
  1: {
    correctOptionId: "D",
    explanation: "本题考查傅里叶变换的尺度变换与时移性质。\n\n**解题思路：**\n1. **变形处理**：首先将 $f_1(4-2t)$ 写成标准形式 $f_1[-2(t-2)]$，这样可以清晰地看出先进行了尺度变换，再进行了时移变换。\n\n2. **应用尺度变换**：\n   设中间信号 $g(t) = f_1(-2t)$。\n   根据性质 $f(at) \\leftrightarrow \\frac{1}{|a|}F(\\frac{j\\omega}{a})$，这里 $a=-2$。\n   则 $G(j\\omega) = \\frac{1}{|-2|}F_1(\\frac{j\\omega}{-2}) = \\frac{1}{2}F_1(-j\\frac{\\omega}{2})$。\n\n3. **应用时移性质**：\n   原信号可以看作 $g(t)$ 右移 2 个单位得到，即 $f_1[-2(t-2)] = g(t-2)$。\n   根据时移性质 $f(t-t_0) \\leftrightarrow F(j\\omega)e^{-j\\omega t_0}$，这里 $t_0=2$。\n   所以 $F_2(j\\omega) = G(j\\omega)e^{-j2\\omega} = \\left[\\frac{1}{2}F_1(-j\\frac{\\omega}{2})\\right] e^{-j2\\omega}$。\n\n**结论：**\n最终结果为 $\\frac{1}{2}F_1(-j\\frac{\\omega}{2})e^{-j2\\omega}$。\n故正确答案为 D。"
  },
  2: {
    correctOptionId: "C",
    explanation: "本题考查理想采样的频谱特性。\n\n**解题分析：**\n1. **时域表达式**：\n   理想冲激取样信号 $f_s(t) = f(t) \\cdot p(t) = f(t) \\sum_{n=-\\infty}^{\\infty} \\delta(t-nT_s)$。\n\n2. **频域表达式**：\n   利用频域卷积定理，或者直接利用采样定理公式：\n   $F_s(j\\omega) = \\frac{1}{T_s} \\sum_{n=-\\infty}^{\\infty} F(j(\\omega - n\\omega_s))$\n   其中 $\\omega_s = \\frac{2\\pi}{T_s}$ 为采样角频率。\n\n3. **特性判断**：\n   - **周期性**：由公式可见，$F_s(j\\omega)$ 是原频谱 $F(j\\omega)$ 以 $\\omega_s$ 为周期进行平移叠加形成的，因此必然是**周期**的。\n   - **连续性**：原信号 $f(t)$ 是非周期连续信号，根据傅里叶变换性质，其频谱 $F(j\\omega)$ 一般是连续谱。周期的延拓叠加不会破坏连续性。因此它是**连续**的。\n\n**结论：**\n取样信号的频谱是**连续周期频谱**。\n故正确答案为 C。"
  },
  3: {
    correctOptionId: "A",
    explanation: "本题考查信号的时域展缩对频带宽度的影响。\n\n**解题步骤：**\n1. **信号分解**：\n   $f(2t-4) = f(2(t-2))$。\n   该变换包含两个步骤：先尺度变换 $t \\to 2t$，再时移 $t \\to t-2$。\n\n2. **分析时移影响**：\n   时移 $(t-2)$ 在频域对应乘以相位因子 $e^{-j2\\omega}$。模值 $|F(j\\omega)|$ 不变，因此**不改变幅度谱的形状和带宽**。\n\n3. **分析尺度影响**：\n   $f(2t)$ 对应频域 $\\frac{1}{2}F(j\\frac{\\omega}{2})$。\n   时域发生压缩，频域的变量由 $\\omega$ 变为 $\\frac{\\omega}{2}$，意味着图形在频率轴上**扩展**了 2 倍。\n\n4. **计算带宽**：\n   原带宽为 $\\Delta\\omega$，扩展 2 倍后，新带宽为 $2\\Delta\\omega$。\n\n**结论：**\n故正确答案为 A。"
  },
  4: {
    correctOptionId: "B",
    explanation: "本题考查冲激函数的筛选性质。\n\n**解题公式：**\n筛选性质 $\\int_{a}^{b} f(t)\\delta(t-t_0)dt = f(t_0)$，当 $t_0 \\in (a, b)$。\n\n**解题步骤：**\n1. **确定冲激点**：\n   $\\delta(t+2)$ 的冲激点在 $t+2=0 \\Rightarrow t_0 = -2$。\n\n2. **检查积分区间**：\n   积分区间为 $[-3, 3]$。因为 $-3 < -2 < 3$，所以冲激点在区间内，筛选性质有效。\n\n3. **代入求值**：\n   根据性质，积分值等于被积函数 $f(t) = \\cos(\\frac{\\pi}{2}t)$ 在 $t = -2$ 处的值。\n   $Value = \\cos(\\frac{\\pi}{2} \\times (-2)) = \\cos(-\\pi)$。\n\n4. **计算结果**：\n   $\\cos(-\\pi) = -1$。\n\n**结论：**\n故正确答案为 B。"
  },
  5: {
    correctOptionId: "C",
    explanation: "本题考查连续正弦信号的周期计算。\n\n**解题步骤：**\n1. **识别角频率**：\n   标准形式 $A\\cos(\\omega t + \\varphi)$。\n   由题可知 $\\omega = 4$ rad/s。\n\n2. **计算周期**：\n   周期公式 $T = \\frac{2\\pi}{\\omega}$。\n   代入得 $T = \\frac{2\\pi}{4} = \\frac{\\pi}{2}$。\n\n**结论：**\n故正确答案为 C。"
  },
  6: {
    correctOptionId: "B",
    explanation: "本题考查离散序列的周期计算。\n\n**解题原理：**\n离散正弦序列 $\\cos(\\omega_0 n)$ 的周期 $N$ 满足 $N = \\frac{2\\pi}{\\omega_0} k$，其中 $N, k$ 为互质整数。\n\n**解题步骤：**\n1. **第一项** $\\cos(\\frac{n\\pi}{4})$：\n   $\\omega_1 = \\frac{\\pi}{4}$。\n   $N_1 = \\frac{2\\pi}{\\pi/4} = 8$。\n\n2. **第二项** $\\sin(\\frac{n\\pi}{8})$：\n   $\\omega_2 = \\frac{\\pi}{8}$。\n   $N_2 = \\frac{2\\pi}{\\pi/8} = 16$。\n\n3. **第三项** $\\cos(\\frac{n\\pi}{2})$：\n   $\\omega_3 = \\frac{\\pi}{2}$。\n   $N_3 = \\frac{2\\pi}{\\pi/2} = 4$。\n\n4. **求最小公倍数**：\n   $N = LCM(8, 16, 4) = 16$。\n\n**结论：**\n故正确答案为 B。"
  },
  7: {
    correctOptionId: "D",
    explanation: "本题考查离散序列的时移对支撑区间的影响。\n\n**解题步骤：**\n1. **确定原信号非零区间**：\n   Support($x(n)$) = $[-2, 4]$。\n\n2. **分析变换**：\n   $y(n) = x(n-3)$ 是将原信号向**右平移** 3 个单位。\n\n3. **计算新区间**：\n   左端点：$-2 + 3 = 1$。\n   右端点：$4 + 3 = 7$。\n   所以 $y(n)$ 的非零区间为 $[1, 7]$。\n\n4. **确定为零区域**：\n   在非零区间之外即为零。\n   即 $n < 1$ 或 $n > 7$。\n\n**结论：**\n故正确答案为 D。"
  },
  8: {
    correctOptionId: "C",
    explanation: "本题考查奈奎斯特采样定理。\n\n**解题步骤：**\n1. **确定最高频率**：\n   $f_m = 10 \\text{ KHz} = 10^4 \\text{ Hz}$。\n\n2. **计算奈奎斯特频率**：\n   $f_s \\ge 2f_m = 2 \\times 10^4 = 20000 \\text{ Hz}$。\n\n3. **计算最大采样周期**：\n   $T_s = \\frac{1}{f_s} \\le \\frac{1}{20000}$。\n\n4. **数值计算**：\n   $T_s \\le 0.5 \\times 10^{-4} \\text{ s} = 5 \\times 10^{-5} \\text{ s}$。\n\n**结论：**\n最大不超过 $5 \\times 10^{-5}$ 秒。\n故正确答案为 C。"
  },
  9: {
    correctOptionId: "D",
    explanation: "本题考查信号的非零区间变换及乘积运算。\n\n**步骤：**\n1. **原信号非零条件**：\n   $x(\\tau) \\neq 0 \\Rightarrow \\tau \\ge 3$。\n\n2. **分析 $x(1-t)$**：\n   非零条件：$1-t \\ge 3 \\Rightarrow t \\le -2$。\n\n3. **分析 $x(2-t)$**：\n   非零条件：$2-t \\ge 3 \\Rightarrow t \\le -1$。\n\n4. **求乘积非零区间**：\n   乘积非零需同时满足：$(t \\le -2) \\cap (t \\le -1) = t \\le -2$。\n\n5. **求乘积为零区间**：\n   非零区间的补集：$t > -2$。\n\n**结论：**\n故正确答案为 D。"
  },
  10: {
    correctOptionId: "A",
    explanation: "本题考查 Z 变换极点与时域信号模式。\n\n**解题分析：**\n1. **极点位置**：$z=1$。\n2. **常用 Z 变换对**：\n   $a^n u(n) \\leftrightarrow \\frac{z}{z-a}$。\n   当 $a=1$ 时，$1^n u(n) = u(n) \\leftrightarrow \\frac{z}{z-1}$，极点为 $z=1$。\n\n**结论：**\n极点为 1 对应阶跃序列 $u(n)$。\n故正确答案为 A。"
  },
  11: {
    correctOptionId: "A",
    explanation: "本题考查自由响应的性质。\n\n**解题分析：**\n自由响应由微分方程的齐次解构成，其模态（指数项 $e^{\\lambda t}$）由特征方程的根（即系统函数的极点）决定，与外加激励的形式无关。\n\n**结论：**\n由系统函数极点决定。\n故正确答案为 A。"
  },
  12: {
    correctOptionId: "A",
    explanation: "本题考查信号尺度变换的频域特性。\n\n**解题步骤：**\n1. **忽略时移**：时移不改变带宽。\n2. **尺度变换**：\n   $f(at) \\leftrightarrow \\frac{1}{|a|}F(j\\frac{\\omega}{a})$。\n   这里 $a=3$，频谱为 $F(j\\frac{\\omega}{3})$，图形在频率轴上拉伸 3 倍。\n3. **计算**：\n   新带宽 $= 3 \\times \\Delta\\omega$。\n\n**结论：**\n故正确答案为 A。"
  },
  13: {
    correctOptionId: "C",
    explanation: "本题考查时域尺度变换。\n\n**解题步骤：**\n1. **原信号零区间**：$\\tau < 3$。\n2. **变量代换**：令 $\\tau = \\frac{t}{3}$。\n3. **求解**：\n   $\\frac{t}{3} < 3 \\Rightarrow t < 9$。\n\n**结论：**\n故正确答案为 C。"
  },
  14: {
    correctOptionId: "A",
    explanation: "本题考查冲激函数性质。\n\n**解题步骤：**\n1. **利用采样性质**：\n   $\\delta(\\tau) f(\\tau) = f(0)\\delta(\\tau)$。\n   $f(\\tau) = \\frac{\\sin 2\\tau}{\\tau}$，极限 $\\lim_{\\tau \\to 0} f(\\tau) = 2$。\n   所以被积函数为 $2\\delta(\\tau)$。\n2. **积分**：\n   原式 $= \\int_{-\\infty}^{t} 2\\delta(\\tau) d\\tau = 2 u(t)$。\n\n**结论：**\n故正确答案为 A。"
  },
  15: {
    correctOptionId: "B",
    explanation: "本题考查拉普拉斯逆变换。\n\n**解题步骤：**\n1. **有理部分逆变换**：\n   $G(s) = \\frac{2}{s} + \\frac{1}{s^2} \\leftrightarrow g(t) = (2+t)u(t)$。\n2. **时移性质**：\n   $F(s) = G(s)e^{-2s} \\leftrightarrow f(t) = g(t-2)$。\n3. **代入**：\n   $f(t) = [2 + (t-2)] u(t-2) = t u(t-2)$。\n\n**结论：**\n故正确答案为 B。"
  },
  16: {
    correctOptionId: "B",
    explanation: "本题考查系统线性与时变性。\n\n**解题步骤：**\n1. **线性**：满足叠加原理，为**线性**。\n2. **时变性**：\n   先延时：$e(t-t_0) \\to e(1-t-t_0)$。\n   先响应后延时：$r(t-t_0) = e(1-(t-t_0)) = e(1-t+t_0)$。\n   两者不等，为**时变**。\n\n**结论：**\n线性时变系统。\n故正确答案为 B。"
  },
  17: {
    correctOptionId: "D",
    explanation: "本题考查周期信号频谱特点。\n\n**分析：**\n周期信号的傅里叶变换由离散的冲激函数组成（离散性），且频谱包络一般是非周期的。\n\n**结论：**\n离散、非周期频谱。\n故正确答案为 D。"
  },
  18: {
    correctOptionId: "D",
    explanation: "本题考查零状态响应定义。\n\n**分析：**\n零状态响应定义为：系统初始状态为 0，仅由外加激励引起的响应。\n\n**结论：**\n故正确答案为 D。"
  },
  19: {
    correctOptionId: "A",
    explanation: "本题考查离散信号周期。\n\n**解题步骤：**\n1. **分量1**：$\\omega_1 = \\frac{3\\pi}{4}$，$N_1 = \\frac{2\\pi}{\\omega_1}k = \\frac{8}{3}k \\to 8$。\n2. **分量2**：$\\omega_2 = \\frac{\\pi}{4}$，$N_2 = \\frac{2\\pi}{\\omega_2}k = 8k \\to 8$。\n3. **总周期**：$LCM(8, 8) = 8$。\n\n**结论：**\n故正确答案为 A。"
  },
  20: {
    correctOptionId: "C",
    explanation: "本题考查系统性质。\n\n**分析：**\n1. $e^2(t)$ 含有平方运算，不满足齐次性，**非线性**。\n2. 系数恒定，无显式 $t$，**时不变**。\n\n**结论：**\n非线性时不变系统。\n故正确答案为 C。"
  },
  21: {
    correctOptionId: "A",
    explanation: "本题考查 Z 变换对。\n\n**分析：**\n$H(z) = \\frac{z}{z-3}$，极点 $z=3$。\n收敛域 $|z|>3$ (极点外)，对应因果序列。\n变换对：$a^n u(n) \\leftrightarrow \\frac{1}{1-az^{-1}}$。\n\n**结论：**\n$3^n u(n)$。\n故正确答案为 A。"
  },
  22: {
    correctOptionId: "B",
    explanation: "本题考查复合信号带宽。\n\n**解题步骤：**\n1. **分量1**：$Sa(100t)$，$\\omega_{m1} = 100$。\n2. **分量2**：$Sa^2(60t)$，时域平方频域卷积，带宽翻倍。$\\omega_{m2} = 60 \\times 2 = 120$。\n3. **最大带宽**：$\\omega_m = 120$。\n4. **采样频率**：$\\omega_s \\ge 2\\omega_m = 240$。\n   $f_s = \\frac{240}{2\\pi} = \\frac{120}{\\pi}$。\n\n**结论：**\n故正确答案为 B。"
  },
  23: {
    correctOptionId: "C",
    explanation: "本题考查信号支撑集逻辑。\n\n**分析：**\n$x(1-t) \\neq 0 \\Rightarrow t \\le -2$。\n$x(2-t) \\neq 0 \\Rightarrow t \\le -1$。\n若要和为 0 (且假设信号不同号不抵消)，则需 $t$ 落在两个非零区间之外。\n即 $t > -2$ 且 $t > -1$ $\\Rightarrow t > -1$。\n\n**结论：**\n故正确答案为 C。"
  },
  24: {
    correctOptionId: "A",
    explanation: "本题考查 Sa 函数带宽。\n\n**分析：**\n$\\omega_m = 100$。\n$\\omega_s = 200$。\n$f_s = \\frac{200}{2\\pi} = \\frac{100}{\\pi}$。\n\n**结论：**\n故正确答案为 A。"
  },
  25: {
    correctOptionId: "C",
    explanation: "本题考查 Z 变换收敛域。\n\n**分析：**\n极点：$-0.5, -2$。\n因果信号对应收敛域在最大极点模值之外。\nROC: $|z| > 2$。\n\n**结论：**\n故正确答案为 C。"
  },
  26: {
    correctOptionId: "B",
    explanation: "本题考查稳定性判据。\n\n**分析：**\n因果系统：ROC 为极点外部。\n稳定系统：ROC 包含单位圆。\n推论：极点必须在单位圆内 ($|p_k| < 1$)。\n\n**结论：**\n故正确答案为 B。"
  },
  27: {
    correctOptionId: "B",
    explanation: "本题考查离散序列变量变换。\n\n**解题步骤：**\n1. 原区间 $[-2, 4]$。\n2. 变换 $-2 \\le -n-2 \\le 4$。\n3. 解得 $-6 \\le n \\le 0$。\n4. 为零区间即 $n < -6$ 或 $n > 0$。\n\n**结论：**\n故正确答案为 B。"
  },
  28: {
    correctOptionId: "B",
    explanation: "本题考查自然频率。\n\n**分析：**\n自然频率即分母多项式的根。\n$s(s+1)(s+2) = 0 \\Rightarrow s = 0, -1, -2$。\n虽然存在零极点对消，但作为系统自然模态，它们均存在。\n\n**结论：**\n故正确答案为 B。"
  },
  29: {
    correctOptionId: "C",
    explanation: "本题考查 Z 变换 ROC。\n\n**分析：**\n极点 -1, -2。\n因果对应 $|z| > |p_{max}| = 2$。\n\n**结论：**\n故正确答案为 C。"
  },
  30: {
    correctOptionId: "B",
    explanation: "本题考查冲激函数尺度变换。\n\n**公式：**\n$\\delta(at) = \\frac{1}{|a|}\\delta(t)$。\n\n**分析：**\n$a=2$，则 $\\delta(2t) = \\frac{1}{2}\\delta(t)$。\n\n**结论：**\n故正确答案为 B。"
  }
};
