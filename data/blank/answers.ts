
interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const blankAnswers: Record<number, QuestionAnswer> = {
  31: {
    correctOptionId: "1000",
    explanation: "本题考查 **奈奎斯特取样定理 (Nyquist Sampling Theorem)**。\n\n**1. 确定信号最高频率 $f_m$**\n题目给出频谱函数在 $(-500Hz, 500Hz)$ 区间内不为零，这意味着信号的频谱占据了从 -500Hz 到 500Hz 的频带。因此，信号的最高频率分量（截止频率）为：\n$$f_m = 500 \\text{ Hz}$$\n\n**2. 应用奈奎斯特取样定理**\n为了能从取样信号中无失真地恢复出原模拟信号，取样频率 $f_s$ 必须大于或等于信号最高频率的两倍。即满足：\n$$f_s \\ge 2f_m$$\n\n**3. 计算奈奎斯特频率**\n奈奎斯特频率（Nyquist Rate）通常指满足条件的最低取样频率，即取等号时的情况：\n$$f_s = 2 \\times 500 = 1000 \\text{ Hz}$$\n\n**结论：**\n填 1000。"
  },
  32: {
    correctOptionId: "$u(t)$",
    explanation: "本题考查 **冲激函数的取样性质** 和 **变上限积分**。\n\n**1. 利用冲激函数的取样性质**\n性质公式：$f(t)\\delta(t-t_0) = f(t_0)\\delta(t-t_0)$。\n在本题中，被积函数为 $\\delta(\\tau)\\cos\\tau$。这里 $\\delta(\\tau)$ 的冲激点在 $\\tau=0$。\n因此，我们将 $\\tau=0$ 代入 $\\cos\\tau$ 中：\n$$\\delta(\\tau)\\cos(0) = \\delta(\\tau) \\cdot 1 = \\delta(\\tau)$$\n\n**2. 简化积分式**\n原积分变形为：\n$$\\int_{-\\infty}^{t} \\delta(\\tau) d\\tau$$\n\n**3. 计算积分结果**\n根据单位阶跃函数 $u(t)$ 的定义，它是单位冲激函数 $\\delta(t)$ 的变上限积分：\n$$u(t) = \\int_{-\\infty}^{t} \\delta(\\tau) d\\tau$$\n\n**结论：**\n填 $u(t)$。"
  },
  33: {
    correctOptionId: "$1 - \\cos(t - \\frac{\\pi}{2})$",
    explanation: "本题考查 **卷积的时移性质**。\n\n**1. 卷积的时移性质**\n任何信号 $f(t)$ 与延时的单位冲激函数 $\\delta(t-t_0)$ 进行卷积，结果就是将原信号在时间轴上平移 $t_0$。\n公式：$$f(t) * \\delta(t - t_0) = f(t - t_0)$$\n\n**2. 识别信号与参数**\n在本题中：\n- 原信号 $f(t) = 1 - \\cos t$\n- 延时量 $t_0 = \\frac{\\pi}{2}$\n\n**3. 代入计算**\n将 $f(t)$ 中的 $t$ 替换为 $(t - \\frac{\\pi}{2})$：\n$$result = 1 - \\cos(t - \\frac{\\pi}{2})$$\n\n**补充说明**\n虽然利用三角公式 $\\cos(t - \\pi/2) = \\sin t$，可以将结果写为 $1 - \\sin t$，但题目考查的是卷积性质的直接应用，保留平移形式通常更为标准。\n\n**结论：**\n填 $1 - \\cos(t - \\frac{\\pi}{2})$。"
  },
  34: {
    correctOptionId: "$\\cos\\omega_0(t-\\tau)$",
    explanation: "本题考查 **冲激函数的卷积单位元性质**。\n\n**1. 卷积单位元性质**\n单位冲激函数 $\\delta(t)$ 在卷积运算中起着“单位元”的作用（类似于乘法中的 1）。任何信号与 $\\delta(t)$ 卷积，结果仍为该信号本身。\n公式：$$f(t) * \\delta(t) = f(t)$$\n\n**2. 应用到本题**\n我们将 $\\cos\\omega_0(t-\\tau)$ 视为一个关于 $t$ 的函数 $g(t)$。\n$$\\delta(t) * g(t) = g(t)$$\n因此结果就是原函数本身。\n\n**结论：**\n填 $\\cos\\omega_0(t-\\tau)$。"
  },
  35: {
    correctOptionId: "第一空：$f(t-t_0)$；第二空：$f(t)e^{j\\omega_0 t}$",
    explanation: "本题考查 **傅里叶变换的时移性质** 和 **频移性质**。\n\n**第一空：时移性质的逆变换**\n傅里叶变换的时移性质指出：若 $f(t) \\leftrightarrow F(\\omega)$，则信号在时域的延时 $t_0$ 对应于频域乘以 $e^{-j\\omega t_0}$。\n公式：$$f(t-t_0) \\leftrightarrow F(\\omega)e^{-j\\omega t_0}$$\n因此，$F(\\omega)e^{-j\\omega t_0}$ 的原函数是 $f(t-t_0)$。\n\n**第二空：频移性质的逆变换**\n傅里叶变换的频移性质指出：若 $f(t) \\leftrightarrow F(\\omega)$，则频谱在频域的平移 $\\omega_0$ 对应于时域乘以复指数因子 $e^{j\\omega_0 t}$。\n公式：$$f(t)e^{j\\omega_0 t} \\leftrightarrow F(\\omega - \\omega_0)$$\n因此，$F(\\omega - \\omega_0)$ 的原函数是 $f(t)e^{j\\omega_0 t}$。\n\n**结论：**\n填 $f(t-t_0)$ 和 $f(t)e^{j\\omega_0 t}$。"
  },
  36: {
    correctOptionId: "第一空：$0.5^n u(n) - 2^n u(n)$；第二空：$0.5^n u(n) + 2^n u(-n-1)$",
    explanation: "本题考查 **利用部分分式展开法求 Z 逆变换**，重点在于根据收敛域 (ROC) 判断时域序列的因果性。\n\n**1. 因式分解与极点分析**\n分母 $z^2 - 2.5z + 1 = (z-0.5)(z-2)$。\n极点为 $p_1 = 0.5$ 和 $p_2 = 2$。\n\n**2. 部分分式展开**\n为了方便查表，通常对 $X(z)/z$ 进行展开：\n$$\\frac{X(z)}{z} = \\frac{-1.5}{(z-0.5)(z-2)} = \\frac{A}{z-0.5} + \\frac{B}{z-2}$$\n计算系数：\n- $A = \\frac{-1.5}{0.5-2} = \\frac{-1.5}{-1.5} = 1$\n- $B = \\frac{-1.5}{2-0.5} = \\frac{-1.5}{1.5} = -1$\n所以：\n$$\\frac{X(z)}{z} = \\frac{1}{z-0.5} - \\frac{1}{z-2} \\implies X(z) = \\frac{z}{z-0.5} - \\frac{z}{z-2}$$\n\n**3. 第一空：收敛域 $|z|>2$**\n- ROC 在最大极点 $2$ 之外，说明所有分量均为**因果序列**。\n- $\\frac{z}{z-0.5} \\leftrightarrow (0.5)^n u(n)$\n- $-\\frac{z}{z-2} \\leftrightarrow -(2)^n u(n)$\n- 结果：$$x(n) = (0.5)^n u(n) - 2^n u(n)$$\n\n**4. 第二空：收敛域 $0.5<|z|<2$**\n- ROC 是环状区域。对于极点 $0.5$，ROC 在其外部 ($|z|>0.5$)，对应**因果**分量；对于极点 $2$，ROC 在其内部 ($|z|<2$)，对应**反因果**分量。\n- $\\frac{z}{z-0.5} \\leftrightarrow (0.5)^n u(n)$ (不变)\n- $-\\frac{z}{z-2}$：因为是反因果，利用变换对 $-a^n u(-n-1) \\leftrightarrow \\frac{z}{z-a}$ (当 $|z|<|a|$)。\n  这里系数是 -1，且要变为反因果，所以对应项为 $- [-(2)^n u(-n-1)] = 2^n u(-n-1)$。\n- 结果：$$x(n) = (0.5)^n u(n) + 2^n u(-n-1)$$\n\n**结论：**\n第一空填 $0.5^n u(n) - 2^n u(n)$；\n第二空填 $0.5^n u(n) + 2^n u(-n-1)$。"
  },
  37: {
    correctOptionId: "$\\sum_{m=-\\infty}^{n} \\delta(m)$",
    explanation: "本题考查 **离散信号的基本定义与关系**。\n\n**1. 定义回顾**\n- 单位样值序列 $\\delta(n)$：仅在 $n=0$ 时为 1，其余为 0。\n- 单位阶跃序列 $u(n)$：当 $n \\ge 0$ 时为 1，当 $n < 0$ 时为 0。\n\n**2. 累加关系**\n阶跃序列在 $n$ 时刻的值，可以看作是从 $-\\infty$ 到 $n$ 时刻所有样值序列的累加。\n- 当 $n < 0$ 时，求和区间内没有 $\\delta(0)$，和为 0。\n- 当 $n \\ge 0$ 时，求和区间内包含 $\\delta(0)=1$，和为 1。\n\n**3. 数学表达**\n$$u(n) = \\sum_{m=-\\infty}^{n} \\delta(m)$$\n\n**结论：**\n填 $\\sum_{m=-\\infty}^{n} \\delta(m)$。"
  },
  38: {
    correctOptionId: "$e^{-at}$",
    explanation: "本题考查 **冲激函数的卷积性质**。\n\n**1. 卷积单位元**\n单位冲激函数 $\\delta(t)$ 与任意信号 $f(t)$ 的卷积等于该信号本身。\n公式：$$f(t) * \\delta(t) = f(t)$$\n\n**2. 应用**\n本题中 $f(t) = e^{-at}$。\n直接套用公式：\n$$\\delta(t) * e^{-at} = e^{-at}$$\n\n**结论：**\n填 $e^{-at}$。"
  },
  39: {
    correctOptionId: "$|a| < 1$",
    explanation: "本题考查 **离散系统的稳定性判据**。\n\n**1. 找出系统的极点**\n系统函数为 $H(z) = \\frac{z}{z+a}$。\n极点是分母多项式的根，即令 $z + a = 0$，解得极点：\n$$z_p = -a$$\n\n**2. 稳定性条件**\n对于线性时不变因果系统，其稳定性充要条件是：**所有极点必须位于 Z 平面的单位圆内**。\n数学表达为：$$|z_p| < 1$$\n\n**3. 求解参数范围**\n将极点代入条件：\n$$|-a| < 1 \\implies |a| < 1$$\n\n**结论：**\n填 $|a| < 1$。"
  },
  40: {
    correctOptionId: "1",
    explanation: "本题考查 **冲激函数的筛选性质**。\n\n**1. 筛选性质公式**\n$$\\int_{-\\infty}^{\\infty} f(t)\\delta(t-t_0)dt = f(t_0)$$\n这意味着积分的结果就是函数 $f(t)$ 在冲激点 $t_0$ 处的取值。\n\n**2. 识别参数**\n- 被积函数 $f(t) = 1 - \\cos t$\n- 冲激函数 $\\delta(t - \\frac{\\pi}{2})$，即冲激点 $t_0 = \\frac{\\pi}{2}$\n\n**3. 代入计算**\n$$Result = f(\\frac{\\pi}{2}) = 1 - \\cos(\\frac{\\pi}{2})$$\n已知 $\\cos(\\frac{\\pi}{2}) = 0$，所以：\n$$Result = 1 - 0 = 1$$\n\n**结论：**\n填 1。"
  },
  41: {
    correctOptionId: "$u(t)$",
    explanation: "本题考查 **冲激函数的取样性质** 结合 **变上限积分**。\n\n**1. 简化被积函数**\n利用取样性质 $f(\\tau)\\delta(\\tau) = f(0)\\delta(\\tau)$。\n此处 $f(\\tau) = \\cos\\omega_0\\tau$，冲激点在 0。\n$$\\delta(\\tau)\\cos(\\omega_0 \\cdot 0) = \\delta(\\tau) \\cdot 1 = \\delta(\\tau)$$\n\n**2. 计算积分**\n原式化为：\n$$\\int_{-\\infty}^{t} \\delta(\\tau) d\\tau$$\n\n**3. 结果**\n根据阶跃函数的定义，冲激函数的积分即为阶跃函数 $u(t)$。\n\n**结论：**\n填 $u(t)$。"
  },
  42: {
    correctOptionId: "$\\cos\\omega_0$",
    explanation: "本题考查 **冲激函数的筛选性质**。\n\n**1. 确定冲激点**\n$\\delta(t+1)$ 的冲激点在 $t+1=0$，即 $t_0 = -1$。\n\n**2. 应用筛选性质**\n$$\\int_{-\\infty}^{+\\infty} f(t)\\delta(t - t_0) dt = f(t_0)$$\n这里 $f(t) = \\cos\\omega_0 t$。\n代入 $t = -1$：\n$$Result = \\cos(\\omega_0 \\cdot (-1)) = \\cos(-\\omega_0)$$\n\n**3. 化简**\n由于余弦函数是偶函数，即 $\\cos(-x) = \\cos(x)$，所以：\n$$\\cos(-\\omega_0) = \\cos\\omega_0$$\n\n**结论：**\n填 $\\cos\\omega_0$。"
  },
  43: {
    correctOptionId: "2",
    explanation: "本题考查 **连续信号周期的计算**。\n\n**1. 分析各个分量的周期**\n- 第一项 $\\cos 2\\pi t$：角频率 $\\omega_1 = 2\\pi$。\n  周期 $T_1 = \\frac{2\\pi}{\\omega_1} = \\frac{2\\pi}{2\\pi} = 1$ s。\n- 第二项 $\\sin 5\\pi t$：角频率 $\\omega_2 = 5\\pi$。\n  周期 $T_2 = \\frac{2\\pi}{\\omega_2} = \\frac{2\\pi}{5\\pi} = \\frac{2}{5} = 0.4$ s。\n\n**2. 寻找公共周期**\n复合信号的周期 $T$ 是各分量周期的**最小公倍数**。我们需要找到最小的整数 $m, n$，使得：\n$$T = m \\cdot T_1 = n \\cdot T_2$$\n代入数值：\n$$m \\cdot 1 = n \\cdot \\frac{2}{5} \\implies \\frac{m}{n} = \\frac{2}{5}$$\n取互质整数 $m=2, n=5$。\n\n**3. 计算总周期**\n$$T = 2 \\times T_1 = 2 \\times 1 = 2$$\n(验证：$T = 5 \\times 0.4 = 2$)\n\n**结论：**\n填 2。"
  },
  44: {
    correctOptionId: "$e^{-t}u(t)$",
    explanation: "本题考查 **卷积的微分性质**。\n\n**1. 卷积微分性质公式**\n$$\\frac{d}{dt}[f_1(t) * f_2(t)] = f_1(t) * \\frac{d}{dt}f_2(t)$$\n我们选择对其中一个信号求导，通常选择求导后形式简单的那个。\n\n**2. 选择求导对象**\n这里 $f_1(t) = e^{-t}u(t)$，$f_2(t) = u(t)$。\n我们对 $f_2(t) = u(t)$ 求导，因为阶跃函数的导数是冲激函数：\n$$\\frac{d}{dt}u(t) = \\delta(t)$$\n\n**3. 代入计算**\n原式变为：\n$$e^{-t}u(t) * \\delta(t)$$\n根据冲激函数的卷积单位元性质 ($f(t) * \\delta(t) = f(t)$)，结果为：\n$$e^{-t}u(t)$$\n\n**结论：**\n填 $e^{-t}u(t)$。"
  },
  45: {
    correctOptionId: "1",
    explanation: "本题考查 **冲激函数的筛选性质**。\n\n**1. 确定冲激点**\n$\\delta(t)$ 的冲激点在 $t=0$。\n\n**2. 筛选求值**\n被积函数 $f(t) = e^{-at}$。\n积分结果等于 $f(0)$：\n$$f(0) = e^{-a \\cdot 0} = e^0 = 1$$\n\n**结论：**\n填 1。"
  },
  46: {
    correctOptionId: "第一空：$3^n u(n)$；第二空：$-3^n u(-n-1)$",
    explanation: "本题考查 **Z 变换的收敛域与时域序列对应关系**。\n\n**1. 分析系统函数**\n$$X(z) = \\frac{1}{1-3z^{-1}} = \\frac{z}{z-3}$$\n极点位于 $z=3$。\n\n**2. 情况一：$|z|>3$**\n- 收敛域在极点模值外部，对应**因果序列**。\n- 标准变换对：$a^n u(n) \\leftrightarrow \\frac{z}{z-a}$ ($|z|>|a|$)。\n- 此处 $a=3$，所以 $x(n) = 3^n u(n)$。\n\n**3. 情况二：$|z|<3$**\n- 收敛域在极点模值内部，对应**反因果序列**。\n- 标准变换对：$-a^n u(-n-1) \\leftrightarrow \\frac{z}{z-a}$ ($|z|<|a|$)。\n- 此处 $a=3$，所以 $x(n) = -3^n u(-n-1)$。\n\n**结论：**\n第一空填 $3^n u(n)$；\n第二空填 $-3^n u(-n-1)$。"
  },
  47: {
    correctOptionId: "$u(t)$",
    explanation: "本题考查 **卷积微分性质** 或 **直接计算**。\n\n**方法一：利用性质**\n$$\\frac{d}{dt}[u(t) * u(t)] = u(t) * \\frac{d}{dt}u(t) = u(t) * \\delta(t) = u(t)$$\n\n**方法二：直接积分**\n1. 先计算卷积 $u(t) * u(t)$：\n   $$\\int_{-\\infty}^{\\infty} u(\\tau)u(t-\\tau) d\\tau$$\n   非零区间为 $0 < \\tau < t$ (当 $t>0$ 时)。\n   积分值为 $\\int_{0}^{t} 1 d\\tau = t$。\n   所以 $u(t) * u(t) = t u(t)$ (斜坡函数 $r(t)$)。\n2. 求导：\n   $$\\frac{d}{dt}[t u(t)] = 1 \\cdot u(t) + t \\cdot \\delta(t)$$\n   利用取样性质 $t \\delta(t) = 0 \\cdot \\delta(t) = 0$。\n   结果为 $u(t)$。\n\n**结论：**\n填 $u(t)$。"
  },
  48: {
    correctOptionId: "$-\\delta(t-\\pi)$",
    explanation: "本题考查 **冲激函数的取样性质 (乘积性质)**。\n\n**1. 公式**\n$$f(t)\\delta(t-t_0) = f(t_0)\\delta(t-t_0)$$\n注意：结果仍然包含冲激函数。\n\n**2. 代入**\n$f(t) = \\cos t$，冲激点 $t_0 = \\pi$。\n$$Result = \\cos(\\pi)\\delta(t-\\pi)$$\n\n**3. 计算系数**\n$\\cos(\\pi) = -1$。\n所以结果为 $-\\delta(t-\\pi)$。\n\n**结论：**\n填 $-\\delta(t-\\pi)$。"
  },
  49: {
    correctOptionId: "$\\cos(\\omega_0 \\tau) \\delta(t)$",
    explanation: "本题考查 **冲激函数的乘积性质**。\n\n**1. 分析**\n题目是 $\\delta(t)$ 乘以 $\\cos\\omega_0(t-\\tau)$。\n冲激点在 $t=0$。\n\n**2. 取样**\n将 $t=0$ 代入余弦函数：\n$$\\cos\\omega_0(0-\\tau) = \\cos(-\\omega_0\\tau)$$\n利用偶函数性质 $\\cos(-x)=\\cos x$，得 $\\cos(\\omega_0\\tau)$。\n\n**3. 写出结果**\n$$Result = \\cos(\\omega_0\\tau) \\cdot \\delta(t)$$\n\n**结论：**\n填 $\\cos(\\omega_0 \\tau) \\delta(t)$。"
  },
  50: {
    correctOptionId: "2",
    explanation: "本题考查 **冲激函数的筛选性质**。\n\n**1. 确定参数**\n积分区间为 $(-\\infty, \\infty)$。\n冲激点 $\\tau = 2$。\n被积函数中除冲激外的部分为 $f(\\tau) = \\tau$。\n\n**2. 筛选**\n结果等于 $f(2)$。\n$$f(2) = 2$$\n\n**结论：**\n填 2。"
  },
  51: {
    correctOptionId: "第一空：$\\frac{2}{(s+1)^2+4}$；第二空：$(e^{2t}-e^t)u(t)$",
    explanation: "本题考查 **常用拉普拉斯变换对** 及 **S域平移性质**。\n\n**第一空：求变换**\n1. 基础变换：$\\sin(\\omega t) \\leftrightarrow \\frac{\\omega}{s^2+\\omega^2}$。\n   此处 $\\omega=2$，故 $\\sin(2t) \\leftrightarrow \\frac{2}{s^2+4}$。\n2. 复频移性质：$e^{-at}f(t) \\leftrightarrow F(s+a)$。\n   此处 $a=1$，故将 $s$ 替换为 $s+1$。\n   结果：$$\\frac{2}{(s+1)^2+4}$$\n\n**第二空：求逆变换**\n1. 部分分式展开：\n   $s^2-3s+2 = (s-1)(s-2)$。\n   $$F(s) = \\frac{1}{(s-1)(s-2)} = \\frac{A}{s-1} + \\frac{B}{s-2}$$\n2. 求系数：\n   $A = \\frac{1}{1-2} = -1$\n   $B = \\frac{1}{2-1} = 1$\n   $$F(s) = \\frac{1}{s-2} - \\frac{1}{s-1}$$\n3. 查表求逆：\n   $\\frac{1}{s-a} \\leftrightarrow e^{at}u(t)$。\n   结果：$$e^{2t}u(t) - e^t u(t) = (e^{2t}-e^t)u(t)$$\n\n**结论：**\n第一空填 $\\frac{2}{(s+1)^2+4}$；第二空填 $(e^{2t}-e^t)u(t)$。"
  },
  52: {
    correctOptionId: "$\\cos\\omega_0(t+1)$",
    explanation: "本题考查 **卷积的时移性质**。\n\n**1. 识别形式**\n$\\delta(t+1)$ 是在 $t=-1$ 处的冲激函数。\n与 $\\delta(t-t_0)$ 卷积相当于将原信号平移 $t_0$。这里 $t_0 = -1$。\n\n**2. 代入**\n将 $f(t) = \\cos\\omega_0 t$ 中的 $t$ 替换为 $t - (-1) = t+1$。\n\n**3. 结果**\n$$\\cos\\omega_0(t+1)$$\n\n**结论：**\n填 $\\cos\\omega_0(t+1)$。"
  },
  53: {
    correctOptionId: "1",
    explanation: "本题考查 **冲激函数的筛选性质**。\n\n**1. 冲激点**\n$t=0$。\n\n**2. 筛选**\n代入被积函数 $\\cos(\\omega_0 t)$。\n$$\\cos(\\omega_0 \\cdot 0) = \\cos 0 = 1$$\n\n**结论：**\n填 1。"
  },
  54: {
    correctOptionId: "第一空：$\\frac{1}{(s+2)^2}$；第二空：$(6e^{-4t}-3e^{-2t})u(t)$",
    explanation: "本题考查 **拉普拉斯变换的频移性质** 和 **逆变换**。\n\n**第一空**\n1. 基础变换：$t u(t) \\leftrightarrow \\frac{1}{s^2}$。\n2. 频移性质：乘以 $e^{-2t}$ 对应 $s \\to s+2$。\n3. 结果：$$\\frac{1}{(s+2)^2}$$\n\n**第二空**\n1. 展开：$$F(s) = \\frac{3s}{(s+4)(s+2)} = \\frac{A}{s+4} + \\frac{B}{s+2}$$\n2. 求系数 (留数法)：\n   $$A = \\left. \\frac{3s}{s+2} \\right|_{s=-4} = \\frac{-12}{-2} = 6$$\n   $$B = \\left. \\frac{3s}{s+4} \\right|_{s=-2} = \\frac{-6}{2} = -3$$\n3. 逆变换：\n   $$6e^{-4t}u(t) - 3e^{-2t}u(t)$$\n\n**结论：**\n第一空填 $\\frac{1}{(s+2)^2}$；第二空填 $(6e^{-4t}-3e^{-2t})u(t)$。"
  },
  55: {
    correctOptionId: "$2u(t-2)$",
    explanation: "本题考查 **冲激函数的取样与积分**。\n\n**1. 取样**\n被积函数 $\\tau\\delta(\\tau-2)$。\n因为冲激点在 $\\tau=2$，所以可以将 $\\tau$ 替换为 2：\n$$\\tau\\delta(\\tau-2) = 2\\delta(\\tau-2)$$\n\n**2. 代入积分**\n原式变为：\n$$2 \\int_{-\\infty}^{t} \\delta(\\tau-2) d\\tau$$\n\n**3. 积分结果**\n$\\delta(\\tau-2)$ 的变上限积分是延迟的阶跃函数 $u(t-2)$。\n所以结果为：\n$$2u(t-2)$$\n\n**结论：**\n填 $2u(t-2)$。"
  },
  56: {
    correctOptionId: "$-1 < k < 1$",
    explanation: "本题考查 **连续二阶系统的稳定性条件**。\n\n**1. 特征方程**\n分母多项式为 $D(s) = s^2 + (1-k)s + (k+1)$。\n\n**2. 稳定性判据**\n对于二阶系统 $as^2 + bs + c = 0$ ($a>0$)，系统稳定的充要条件是系数全部为正，即 $b>0$ 且 $c>0$。\n\n**3. 列不等式**\n- $s$ 项系数：$1-k > 0 \\implies k < 1$\n- 常数项：$k+1 > 0 \\implies k > -1$\n\n**4. 综合范围**\n取交集得：\n$$-1 < k < 1$$\n\n**结论：**\n填 $-1 < k < 1$。"
  },
  57: {
    correctOptionId: "$\\delta(t)$",
    explanation: "本题考查 **冲激函数的乘积 (取样) 性质**。\n\n**1. 冲激点**\n$t=0$。\n\n**2. 取样**\n$\\cos(0) = 1$。\n\n**3. 结果**\n$$\\delta(t) \\cdot 1 = \\delta(t)$$\n\n**结论：**\n填 $\\delta(t)$。"
  },
  58: {
    correctOptionId: "$ \\cos\\omega_0 u(t+1) $",
    explanation: "本题考查 **冲激函数的取样性质** 与 **积分定义**。\n\n**1. 简化被积函数**\n利用公式 $f(\\tau)\\delta(\\tau+1) = f(-1)\\delta(\\tau+1)$。\n被积函数变为：\n$$\\cos(\\omega_0(-1))\\delta(\\tau+1) = \\cos(\\omega_0)\\delta(\\tau+1)$$\n\n**2. 提取常数**\n原积分变为：\n$$\\cos\\omega_0 \\int_{-\\infty}^{t} \\delta(\\tau+1) d\\tau$$\n\n**3. 计算积分**\n$\\int_{-\\infty}^{t} \\delta(\\tau+1) d\\tau$ 是单位冲激函数 $\\delta(\\tau+1)$ 的变上限积分。\n根据阶跃函数的定义 $u(t-t_0) = \\int_{-\\infty}^{t} \\delta(\\tau-t_0) d\\tau$。\n这里 $t_0 = -1$，所以积分为 $u(t - (-1)) = u(t+1)$。\n\n**4. 最终结果**\n$$\\cos\\omega_0 \\cdot u(t+1)$$\n\n**结论：**\n填 $\\cos\\omega_0 u(t+1)$。"
  },
  59: {
    correctOptionId: "见解析",
    explanation: "本题考查 **傅里叶变换的多种性质**。\n\n**1. $f(t)\\cos 200t$ (调制性质)**\n公式：$f(t)\\cos(\\omega_0 t) \\leftrightarrow \\frac{1}{2}[F(\\omega+\\omega_0) + F(\\omega-\\omega_0)]$\n答案：$$\\frac{1}{2}[F(\\omega+200) + F(\\omega-200)]$$\n\n**2. $tf(t)$ (频域微分性质)**\n公式：$(-jt)f(t) \\leftrightarrow F'(\\omega) \\implies tf(t) \\leftrightarrow j\\frac{d}{d\\omega}F(\\omega)$\n答案：$$j F'(\\omega)$$\n\n**3. $f(3t-3)$ (尺度与时移)**\n先变形为 $f(3(t-1))$。\n- 尺度变换 $3t$：$\\frac{1}{3}F(\\frac{\\omega}{3})$\n- 时移 $t-1$：在频域乘 $e^{-j\\omega \\cdot 1}$\n答案：$$\\frac{1}{3}F(\\frac{\\omega}{3})e^{-j\\omega}$$\n\n**4. $f(2t-5)$ (尺度与时移)**\n先变形为 $f(2(t-2.5))$。\n- 尺度变换 $2t$：$\\frac{1}{2}F(\\frac{\\omega}{2})$\n- 时移 $t-2.5$：乘 $e^{-j\\omega \\cdot 2.5} = e^{-j\\frac{5}{2}\\omega}$\n答案：$$\\frac{1}{2}F(\\frac{\\omega}{2})e^{-j\\frac{5}{2}\\omega}$$\n\n**5. $f(3-2t)$ (反转、尺度与时移)**\n变形为 $f(-2(t-1.5))$。\n- 尺度 $a=-2$：系数 $\\frac{1}{|-2|} = \\frac{1}{2}$，频率 $\\frac{\\omega}{-2}$\n- 时移 $t-1.5$：乘 $e^{-j\\omega \\cdot 1.5}$\n答案：$$\\frac{1}{2}F(-\\frac{\\omega}{2})e^{-j\\frac{3}{2}\\omega}$$"
  },
  60: {
    correctOptionId: "$-0.75 < k < 0.75$",
    explanation: "本题考查 **离散二阶系统稳定性判据 (朱利判据/三角形法则)**。\n\n**1. 特征方程**\n分母 $D(z) = z^2 - kz - 0.25 = 0$。与标准形式 $z^2 + a_1 z + a_0 = 0$ 对比：\n$a_1 = -k, \\quad a_0 = -0.25$\n\n**2. 稳定性条件**\n对于二阶离散系统，稳定的充要条件是：\n(1) $|a_0| < 1$\n(2) $D(1) > 0$\n(3) $D(-1) > 0$\n\n**3. 求解**\n(1) $|-0.25| < 1$，显然成立。\n(2) $D(1) = 1 - k - 0.25 = 0.75 - k > 0 \\implies k < 0.75$\n(3) $D(-1) = 1 - k(-1) - 0.25 = 0.75 + k > 0 \\implies k > -0.75$\n\n**4. 综合**\n$$-0.75 < k < 0.75$$\n\n**结论：**\n填 $-0.75 < k < 0.75$。"
  },
  61: {
    correctOptionId: "$\\cos\\omega_0(t-\\tau)$",
    explanation: "本题考查 **卷积性质**。\n\n**分析**\n单位冲激函数 $\\delta(t)$ 与任何信号卷积都不变。\n$$f(t) * \\delta(t) = f(t)$$\n此题中信号为 $g(t) = \\cos\\omega_0(t-\\tau)$。\n\n**结论：**\n填 $\\cos\\omega_0(t-\\tau)$。"
  },
  62: {
    correctOptionId: "$\\frac{1}{2\\pi}e^{j2t}$",
    explanation: "本题考查 **傅里叶逆变换**。\n\n**1. 逆变换定义**\n$$f(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} F(\\omega)e^{j\\omega t} d\\omega$$\n\n**2. 代入频谱**\n$$f(t) = \\frac{1}{2\\pi} \\int_{-\\infty}^{\\infty} \\delta(\\omega - 2)e^{j\\omega t} d\\omega$$\n\n**3. 利用筛选性质**\n冲激函数 $\\delta(\\omega-2)$ 在 $\\omega=2$ 处非零。积分结果即将 $\\omega=2$ 代入其余部分。\n$$f(t) = \\frac{1}{2\\pi} e^{j(2)t}$$\n\n**结论：**\n填 $\\frac{1}{2\\pi}e^{j2t}$。"
  },
  63: {
    correctOptionId: "第一空：$u(n)$；第二空：$-u(-n-1)$",
    explanation: "本题考查 **基本 Z 变换对**。\n\n**分析**\n$$X(z) = \\frac{z}{z-1}$$\n极点为 1。\n\n**情况一：$|z|>1$**\n因果序列。对应 $1^n u(n)$，即 $u(n)$。\n\n**情况二：$|z|<1$**\n反因果序列。利用 $-a^n u(-n-1)$ 的形式。\n这里 $a=1$，所以是 $-1^n u(-n-1) = -u(-n-1)$。\n\n**结论：**\n第一空填 $u(n)$；第二空填 $-u(-n-1)$。"
  },
  64: {
    correctOptionId: "$\\delta(t)$",
    explanation: "本题考查 **冲激函数的乘积性质**。\n\n**1. 冲激点**\n$t=0$。\n\n**2. 取样**\n$$e^{-a(0)} = 1$$\n\n**3. 结果**\n$$\\delta(t) \\cdot 1 = \\delta(t)$$\n\n**结论：**\n填 $\\delta(t)$。"
  },
  65: {
    correctOptionId: "见解析",
    explanation: "本题考查 **Z 逆变换的多区域讨论**。\n\n**1. 部分分式展开**\n$$\\frac{X(z)}{z} = \\frac{1}{(z-1)(z-2)} = \\frac{-1}{z-1} + \\frac{1}{z-2}$$\n$$X(z) = \\frac{-z}{z-1} + \\frac{z}{z-2}$$\n极点：1 和 2。\n\n**2. 第一空：$|z|>2$**\n极点 1 和 2 的外部，均为因果。\n$$x(n) = -(1)^n u(n) + (2)^n u(n) = (2^n - 1)u(n)$$\n\n**3. 第二空：$|z|<1$**\n极点 1 和 2 的内部，均为反因果。\n利用对应关系 $\\frac{z}{z-a} \\leftrightarrow -a^n u(-n-1)$。\n$$x(n) = -[-(1)^n u(-n-1)] + [-(2)^n u(-n-1)] = (1 - 2^n)u(-n-1)$$\n\n**4. 第三空：$1<|z|<2$**\n在 1 的外部 (因果)，在 2 的内部 (反因果)。\n- 第一项 $\\frac{-z}{z-1}$：因果，$-(1)^n u(n) = -u(n)$\n- 第二项 $\\frac{z}{z-2}$：反因果，$-(2)^n u(-n-1)$\n$$x(n) = -u(n) - 2^n u(-n-1)$$\n\n**结论：**\n(1) $(2^n - 1)u(n)$；(2) $(1 - 2^n)u(-n-1)$；(3) $-u(n) - 2^n u(-n-1)$。"
  },
  66: {
    correctOptionId: "$\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty$",
    explanation: "本题考查 **LTI 系统稳定性的时域充要条件**。\n\n**结论**\n线性时不变 (LTI) 离散系统稳定的充要条件是：单位样值响应是**绝对可和**的。\n即：\n$$\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty$$\n\n**结论：**\n填 $\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty$。"
  },
  67: {
    correctOptionId: "1",
    explanation: "本题考查 **冲激函数的筛选性质**。\n\n**1. 冲激点**\n$t=0$。\n\n**2. 筛选**\n代入 $\\cos t$。\n$$\\cos 0 = 1$$\n\n**结论：**\n填 1。"
  },
  68: {
    correctOptionId: "第一空：4；第二空：6；第三空：2",
    explanation: "本题考查 **信号运算对带宽和采样频率的影响**。\n\n**1. 已知条件**\n$f(t)$ 的最高频率 $f_m = 1$ kHz。\n\n**2. 第一空：$f(2t)$**\n- 时域压缩 2 倍，对应频域扩展 2 倍。\n- 新带宽 $f_{m}' = 2 f_m = 2$ kHz。\n- 奈奎斯特频率 $f_s = 2 f_{m}' = 4$ kHz。\n\n**3. 第二空：$f^3(t)$**\n- 时域乘积对应频域卷积。\n- $f(t) \\cdot f(t) \\cdot f(t)$ 的频谱宽度是各频谱宽度之和。\n- 新带宽 $f_{m}'' = 1 + 1 + 1 = 3$ kHz。\n- 奈奎斯特频率 $f_s = 2 f_{m}'' = 6$ kHz。\n\n**4. 第三空：$f(t) * f(2t)$**\n- 时域卷积对应频域相乘。\n- 结果的频谱范围是两个信号频谱的**交集** (重叠非零区域)。\n- $F(\\omega)$ 截止于 1k，$F_{2t}(\\omega)$ 截止于 2k。\n- 重叠部分的截止频率为 $\\min(1, 2) = 1$ kHz。\n- 奈奎斯特频率 $f_s = 2 \\times 1 = 2$ kHz。\n\n**结论：**\n依次填 4，6，2。"
  },
  69: {
    correctOptionId: "$\\delta(t - \\frac{\\pi}{2})$",
    explanation: "本题考查 **冲激函数的乘积 (取样) 性质**。\n\n**1. 冲激点**\n$t_0 = \\frac{\\pi}{2}$。\n\n**2. 取样**\n将 $t = \\frac{\\pi}{2}$ 代入前方系数函数 $(1 - \\cos t)$。\n$$Coef = 1 - \\cos(\\frac{\\pi}{2}) = 1 - 0 = 1$$\n\n**3. 结果**\n$$1 \\cdot \\delta(t - \\frac{\\pi}{2}) = \\delta(t - \\frac{\\pi}{2})$$\n\n**结论：**\n填 $\\delta(t - \\frac{\\pi}{2})$。"
  }
};
