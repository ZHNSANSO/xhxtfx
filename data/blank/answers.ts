
interface QuestionAnswer {
  correctOptionId: string;
  explanation: string;
}

export const blankAnswers: Record<number, QuestionAnswer> = {
  31: {
    correctOptionId: "1000",
    explanation: `本题考查 **奈奎斯特取样定理 (Nyquist Sampling Theorem)**。

**1. 确定信号最高频率 \\(f_m\\)**
题目给出频谱函数在 \\((-500Hz, 500Hz)\\) 区间内不为零，这意味着信号的频谱占据了从 -500Hz 到 500Hz 的频带。因此，信号的最高频率分量（截止频率）为：
\\(f_m = 500 \\text{ Hz}\\)

**2. 应用奈奎斯特取样定理**
为了能从取样信号中无失真地恢复出原模拟信号，取样频率 \\(f_s\\) 必须大于或等于信号最高频率的两倍。即满足：
\\(f_s \\ge 2f_m\\)

**3. 计算奈奎斯特频率**
奈奎斯特频率（Nyquist Rate）通常指满足条件的最低取样频率，即取等号时的情况：
\\(f_s = 2 \\times 500 = 1000 \\text{ Hz}\\)

**结论：**
填 1000。`
  },
  32: {
    correctOptionId: "\\(u(t)\\)",
    explanation: `本题考查 **冲激函数的取样性质** 和 **变上限积分**。

**1. 利用冲激函数的取样性质**
性质公式：\\(f(t)\\delta(t-t_0) = f(t_0)\\delta(t-t_0)\\)。
在本题中，被积函数为 \\(\\delta(\\tau)\\cos\\tau\\)。这里 \\(\\delta(\\tau)\\) 的冲激点在 \\(\\tau=0\\)。
因此，我们将 \\(\\tau=0\\) 代入 \\(\\cos\\tau\\) 中：
\\(\\delta(\\tau)\\cos(0) = \\delta(\\tau) \\cdot 1 = \\delta(\\tau)\\)

**2. 简化积分式**
原积分变形为：
\\(\\int_{-\\infty}^{t} \\delta(\\tau) d\\tau\\)

**3. 计算积分结果**
根据单位阶跃函数 \\(u(t)\\) 的定义，它是单位冲激函数 \\(\\delta(t)\\) 的变上限积分：
\\(u(t) = \\int_{-\\infty}^{t} \\delta(\\tau) d\\tau\\)

**结论：**
填 \\(u(t)\\)。`
  },
  33: {
    correctOptionId: "\\(1 - \\cos(t - \\frac{\\pi}{2})\\)",
    explanation: `本题考查 **卷积的时移性质**。

**1. 卷积的时移性质**
任何信号 \\(f(t)\\) 与延时的单位冲激函数 \\(\\delta(t-t_0)\\) 进行卷积，结果就是将原信号在时间轴上平移 \\(t_0\\)。
公式：
\\(f(t) * \\delta(t - t_0) = f(t - t_0)\\)

**2. 识别信号与参数**
在本题中：
- 原信号 \\(f(t) = 1 - \\cos t\\)
- 延时量 \\(t_0 = \\frac{\\pi}{2}\\)

**3. 代入计算**
将 \\(f(t)\\) 中的 \\(t\\) 替换为 \\((t - \\frac{\\pi}{2})\\)：
\\(result = 1 - \\cos(t - \\frac{\\pi}{2})\\)

**结论：**
填 \\(1 - \\cos(t - \\frac{\\pi}{2})\\)。`
  },
  34: {
    correctOptionId: "\\(\\cos\\omega_0(t-\\tau)\\)",
    explanation: `本题考查 **冲激函数的卷积单位元性质**。

**1. 卷积单位元性质**
单位冲激函数 \\(\\delta(t)\\) 在卷积运算中起着“单位元”的作用。任何信号与 \\(\\delta(t)\\) 卷积，结果仍为该信号本身。
公式：
\\(f(t) * \\delta(t) = f(t)\\)

**2. 应用到本题**
我们将 \\(\\cos\\omega_0(t-\\tau)\\) 视为一个关于 \\(t\\) 的函数 \\(g(t)\\)。
\\(\\delta(t) * g(t) = g(t)\\)
因此结果就是原函数本身。

**结论：**
填 \\(\\cos\\omega_0(t-\\tau)\\)。`
  },
  35: {
    correctOptionId: "第一空：\\(f(t-t_0)\\)；第二空：\\(f(t)e^{j\\omega_0 t}\\)",
    explanation: `本题考查 **傅里叶变换的时移性质** 和 **频移性质**。

**第一空：时移性质的逆变换**
傅里叶变换的时移性质指出：若 \\(f(t) \\leftrightarrow F(\\omega)\\)，则信号在时域的延时 \\(t_0\\) 对应于频域乘以 \\(e^{-j\\omega t_0}\\)。
公式：
\\(f(t-t_0) \\leftrightarrow F(\\omega)e^{-j\\omega t_0}\\)
因此，\\(F(\\omega)e^{-j\\omega t_0}\\) 的原函数是 \\(f(t-t_0)\\)。

**第二空：频移性质的逆变换**
傅里叶变换的频移性质指出：若 \\(f(t) \\leftrightarrow F(\\omega)\\)，则频谱在频域的平移 \\(\\omega_0\\) 对应于时域乘以复指数因子 \\(e^{j\\omega_0 t}\\)。
公式：
\\(f(t)e^{j\\omega_0 t} \\leftrightarrow F(\\omega - \\omega_0)\\)
因此，\\(F(\\omega - \\omega_0)\\) 的原函数是 \\(f(t)e^{j\\omega_0 t}\\)。

**结论：**
填 \\(f(t-t_0)\\) 和 \\(f(t)e^{j\\omega_0 t}\\)。`
  },
  36: {
    correctOptionId: "第一空：\\(0.5^n u(n) - 2^n u(n)\\)；第二空：\\(0.5^n u(n) + 2^n u(-n-1)\\)",
    explanation: `本题考查 **利用部分分式展开法求 Z 逆变换**。

**1. 因式分解与极点分析**
分母 \\(z^2 - 2.5z + 1 = (z-0.5)(z-2)\\)。
极点为 \\(p_1 = 0.5\\) 和 \\(p_2 = 2\\)。

**2. 部分分式展开**
对 \\(X(z)/z\\) 进行展开：
\\(\\frac{X(z)}{z} = \\frac{-1.5}{(z-0.5)(z-2)} = \\frac{1}{z-0.5} - \\frac{1}{z-2}\\)
即：
\\(X(z) = \\frac{z}{z-0.5} - \\frac{z}{z-2}\\)

**3. 第一空：收敛域 \\(|z|>2\\)**
- ROC 在最大极点 \\(2\\) 之外，均为**因果序列**。
- \\(\\frac{z}{z-0.5} \\leftrightarrow (0.5)^n u(n)\\)
- \\(-\\frac{z}{z-2} \\leftrightarrow -(2)^n u(n)\\)
- 结果：\\(x(n) = (0.5)^n u(n) - 2^n u(n)\\)

**4. 第二空：收敛域 \\(0.5<|z|<2\\)**
- 对于极点 \\(0.5\\)，ROC 在其外部，对应**因果**；对于极点 \\(2\\)，ROC 在其内部，对应**反因果**。
- 因果项：\\((0.5)^n u(n)\\)
- 反因果项：利用 \\(-a^n u(-n-1) \\leftrightarrow \\frac{z}{z-a}\\)，这里系数是 -1，得 \\(-[-(2)^n u(-n-1)] = 2^n u(-n-1)\\)。
- 结果：\\(x(n) = (0.5)^n u(n) + 2^n u(-n-1)\\)

**结论：**
填 \\(0.5^n u(n) - 2^n u(n)\\) 和 \\(0.5^n u(n) + 2^n u(-n-1)\\)。`
  },
  37: {
    correctOptionId: "\\(\\sum_{m=-\\infty}^{n} \\delta(m)\\)",
    explanation: `本题考查 **离散信号的基本定义与关系**。

**累加关系**
阶跃序列 \\(u(n)\\) 可以看作是从 \\(-\\infty\\) 到 \\(n\\) 时刻所有单位样值序列 \\(\\delta(m)\\) 的累加。
数学表达为：
\\(u(n) = \\sum_{m=-\\infty}^{n} \\delta(m)\\)

**结论：**
填 \\(\\sum_{m=-\\infty}^{n} \\delta(m)\\)。`
  },
  38: {
    correctOptionId: "\\(e^{-at}\\)",
    explanation: `本题考查 **冲激函数的卷积性质**。

**公式**
\\(f(t) * \\delta(t) = f(t)\\)

**应用**
\\(e^{-at} * \\delta(t) = e^{-at}\\)

**结论：**
填 \\(e^{-at}\\)。`
  },
  39: {
    correctOptionId: "\\(|a| < 1\\)",
    explanation: `本题考查 **离散系统的稳定性判据**。

**1. 找出极点**
\\(H(z) = \\frac{z}{z+a}\\)
极点 \\(z_p = -a\\)。

**2. 稳定性条件**
因果离散系统稳定 \\(\\iff\\) 极点在单位圆内。
\\(|z_p| < 1 \\implies |-a| < 1 \\implies |a| < 1\\)

**结论：**
填 \\(|a| < 1\\)。`
  },
  40: {
    correctOptionId: "1",
    explanation: `本题考查 **冲激函数的筛选性质**。

**公式**
\\(\\int_{-\\infty}^{\\infty} f(t)\\delta(t-t_0)dt = f(t_0)\\)

**计算**
被积函数 \\(f(t) = 1 - \\cos t\\)，冲激点 \\(t_0 = \\frac{\\pi}{2}\\)。
\\(Result = 1 - \\cos(\\frac{\\pi}{2}) = 1 - 0 = 1\\)

**结论：**
填 1。`
  },
  41: {
    correctOptionId: "\\(u(t)\\)",
    explanation: `本题考查 **冲激函数取样与积分**。

**1. 取样**
\\(\\delta(\\tau)\\cos(\\omega_0\\tau)\\)，因 \\(\\delta(\\tau)\\) 在 0 处非零，取 \\(\\tau=0\\)。
\\(\\delta(\\tau)\\cos(0) = \\delta(\\tau)\\)

**2. 积分**
\\(\\int_{-\\infty}^{t} \\delta(\\tau) d\\tau = u(t)\\)

**结论：**
填 \\(u(t)\\)。`
  },
  42: {
    correctOptionId: "\\(\\cos\\omega_0\\)",
    explanation: `本题考查 **冲激函数的筛选性质**。

**计算**
\\(\\delta(t+1)\\) 冲激点 \\(t = -1\\)。
\\(Result = \\cos(\\omega_0 \\cdot (-1)) = \\cos(-\\omega_0)\\)
因余弦是偶函数：
\\(= \\cos\\omega_0\\)

**结论：**
填 \\(\\cos\\omega_0\\)。`
  },
  43: {
    correctOptionId: "2",
    explanation: `本题考查 **连续信号周期的计算**。

**1. 各分量周期**
- \\(\\cos 2\\pi t\\)：\\(T_1 = \\frac{2\\pi}{2\\pi} = 1\\)
- \\(\\sin 5\\pi t\\)：\\(T_2 = \\frac{2\\pi}{5\\pi} = 0.4\\)

**2. 最小公倍数**
\\(T = m T_1 = n T_2\\)
\\(m \\cdot 1 = n \\cdot 0.4 \\implies \\frac{m}{n} = \\frac{2}{5}\\)
取 \\(m=2\\)，则 \\(T = 2 \\times 1 = 2\\)。

**结论：**
填 2。`
  },
  44: {
    correctOptionId: "\\(e^{-t}u(t)\\)",
    explanation: `本题考查 **卷积的微分性质**。

**1. 性质**
\\(\\frac{d}{dt}[f_1 * f_2] = f_1 * \\frac{d}{dt}f_2\\)

**2. 计算**
取 \\(f_2(t) = u(t)\\)，则 \\(f_2'(t) = \\delta(t)\\)。
原式 \\(= [e^{-t}u(t)] * \\delta(t)\\)
根据卷积单位元性质，结果为 \\(e^{-t}u(t)\\)。

**结论：**
填 \\(e^{-t}u(t)\\)。`
  },
  45: {
    correctOptionId: "1",
    explanation: `本题考查 **筛选性质**。

**计算**
冲激点 \\(t=0\\)。
\\(Result = e^{-a(0)} = 1\\)

**结论：**
填 1。`
  },
  46: {
    correctOptionId: "第一空：\\(3^n u(n)\\)；第二空：\\(-3^n u(-n-1)\\)",
    explanation: `本题考查 **Z 逆变换**。

**分析**
\\(X(z) = \\frac{z}{z-3}\\)
极点 \\(z=3\\)。

- **\\(|z|>3\\)**：因果，对应 \\(3^n u(n)\\)。
- **\\(|z|<3\\)**：反因果，对应 \\(-3^n u(-n-1)\\)。

**结论：**
填 \\(3^n u(n)\\) 和 \\(-3^n u(-n-1)\\)。`
  },
  47: {
    correctOptionId: "\\(u(t)\\)",
    explanation: `本题考查 **卷积微分**。

**计算**
\\(\\frac{d}{dt}[u(t)*u(t)] = u(t) * \\delta(t) = u(t)\\)

**结论：**
填 \\(u(t)\\)。`
  },
  48: {
    correctOptionId: "\\(-\\delta(t-\\pi)\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(f(t)\\delta(t-\\pi) = f(\\pi)\\delta(t-\\pi)\\)。
\\(f(\\pi) = \\cos(\\pi) = -1\\)
结果：\\(-\\delta(t-\\pi)\\)。

**结论：**
填 \\(-\\delta(t-\\pi)\\)。`
  },
  49: {
    correctOptionId: "\\(\\cos(\\omega_0 \\tau) \\delta(t)\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(\\delta(t)\\) 冲激点 \\(t=0\\)。
代入 \\(\\cos\\omega_0(t-\\tau)\\) 得 \\(\\cos\\omega_0(0-\\tau) = \\cos(\\omega_0\\tau)\\)。
结果：\\(\\cos(\\omega_0\\tau)\\delta(t)\\)

**结论：**
填 \\(\\cos(\\omega_0 \\tau) \\delta(t)\\)。`
  },
  50: {
    correctOptionId: "2",
    explanation: `本题考查 **筛选性质**。

**计算**
冲激点 \\(\\tau=2\\)。
代入 \\(f(\\tau) = \\tau\\)。
\\(Result = 2\\)

**结论：**
填 2。`
  },
  51: {
    correctOptionId: "第一空：\\(\\frac{2}{(s+1)^2+4}\\)；第二空：\\((e^{2t}-e^t)u(t)\\)",
    explanation: `本题考查 **拉氏变换对**。

**第一空**
\\(e^{-t}\\sin 2t \\leftrightarrow \\frac{2}{(s+1)^2+2^2} = \\frac{2}{(s+1)^2+4}\\)

**第二空**
\\(F(s) = \\frac{1}{(s-1)(s-2)} = \\frac{1}{s-2} - \\frac{1}{s-1}\\)
逆变换：\\(e^{2t}u(t) - e^t u(t)\\)

**结论：**
填 \\(\\frac{2}{(s+1)^2+4}\\) 和 \\((e^{2t}-e^t)u(t)\\)。`
  },
  52: {
    correctOptionId: "\\(\\cos\\omega_0(t+1)\\)",
    explanation: `本题考查 **卷积时移**。

**公式**
\\(f(t) * \\delta(t+1) = f(t+1)\\)

**计算**
\\(result = \\cos\\omega_0(t+1)\\)

**结论：**
填 \\(\\cos\\omega_0(t+1)\\)。`
  },
  53: {
    correctOptionId: "1",
    explanation: `本题考查 **筛选性质**。

**计算**
冲激点 \\(t=0\\)。
\\(Result = \\cos(\\omega_0 \\cdot 0) = 1\\)

**结论：**
填 1。`
  },
  54: {
    correctOptionId: "第一空：\\(\\frac{1}{(s+2)^2}\\)；第二空：\\((6e^{-4t}-3e^{-2t})u(t)\\)",
    explanation: `本题考查 **拉氏变换性质**。

**第一空**
\\(t \\leftrightarrow 1/s^2\\)。
\\(te^{-2t} \\leftrightarrow \\frac{1}{(s+2)^2}\\)。

**第二空**
\\(F(s) = \\frac{3s}{(s+4)(s+2)} = \\frac{6}{s+4} + \\frac{-3}{s+2}\\)
逆变换：\\(6e^{-4t}u(t) - 3e^{-2t}u(t)\\)

**结论：**
填 \\(\\frac{1}{(s+2)^2}\\) 和 \\((6e^{-4t}-3e^{-2t})u(t)\\)。`
  },
  55: {
    correctOptionId: "\\(2u(t-2)\\)",
    explanation: `本题考查 **冲激取样与积分**。

**步骤**
1. 取样：\\(\\tau\\delta(\\tau-2) = 2\\delta(\\tau-2)\\)。
2. 积分：\\(\\int_{-\\infty}^t 2\\delta(\\tau-2) d\\tau = 2u(t-2)\\)。

**结论：**
填 \\(2u(t-2)\\)。`
  },
  56: {
    correctOptionId: "\\(-1 < k < 1\\)",
    explanation: `本题考查 **系统稳定性**。

**分析**
分母 \\(s^2 + (1-k)s + (k+1) = 0\\)。
稳定条件：所有系数大于 0。
1. \\(1-k > 0 \\implies k < 1\\)
2. \\(k+1 > 0 \\implies k > -1\\)

**结论：**
填 \\(-1 < k < 1\\)。`
  },
  57: {
    correctOptionId: "\\(\\delta(t)\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(\\delta(t)\\cos(0) = \\delta(t) \\cdot 1 = \\delta(t)\\)。

**结论：**
填 \\(\\delta(t)\\)。`
  },
  58: {
    correctOptionId: "\\(\\cos\\omega_0 u(t+1)\\)",
    explanation: `本题考查 **冲激函数性质**。

**1. 取样**
\\(\\delta(\\tau+1)\\cos(\\omega_0\\tau) = \\delta(\\tau+1)\\cos(-\\omega_0) = \\cos\\omega_0\\delta(\\tau+1)\\)。

**2. 积分**
\\(\\cos\\omega_0 \\int_{-\\infty}^t \\delta(\\tau+1) d\\tau = \\cos\\omega_0 u(t+1)\\)

**结论：**
填 \\(\\cos\\omega_0 u(t+1)\\)。`
  },
  59: {
    correctOptionId: "见解析",
    explanation: `本题考查 **傅里叶变换性质**。

1. **调制**：
   \\(f(t)\\cos 200t \\leftrightarrow \\frac{1}{2}[F(\\omega+200) + F(\\omega-200)]\\)

2. **频域微分**：
   \\(tf(t) \\leftrightarrow j\\frac{d}{d\\omega}F(\\omega)\\)

3. **尺度时移** \\(f(3t-3)\\)：
   \\(\\frac{1}{3}F(\\frac{\\omega}{3})e^{-j\\omega}\\)

4. **尺度时移** \\(f(2t-5)\\)：
   \\(\\frac{1}{2}F(\\frac{\\omega}{2})e^{-j\\frac{5}{2}\\omega}\\)

5. **反转尺度** \\(f(3-2t)\\)：
   \\(\\frac{1}{2}F(-\\frac{\\omega}{2})e^{-j\\frac{3}{2}\\omega}\\)`
  },
  60: {
    correctOptionId: "\\(-0.75 < k < 0.75\\)",
    explanation: `本题考查 **朱利判据**。

**分析**
特征方程 \\(z^2 - kz - 0.25 = 0\\)。
1. \\(D(1) = 0.75 - k > 0 \\implies k < 0.75\\)
2. \\(D(-1) = 0.75 + k > 0 \\implies k > -0.75\\)
3. \\(|-0.25| < 1\\) (成立)

**结论：**
填 \\(-0.75 < k < 0.75\\)。`
  },
  61: {
    correctOptionId: "\\(\\cos\\omega_0(t-\\tau)\\)",
    explanation: `本题考查 **卷积性质**。

**计算**
\\(f(t) * \\delta(t) = f(t)\\)
这里 \\(f(t) = \\cos\\omega_0(t-\\tau)\\)。

**结论：**
填 \\(\\cos\\omega_0(t-\\tau)\\)。`
  },
  62: {
    correctOptionId: "\\(\\frac{1}{2\\pi}e^{j2t}\\)",
    explanation: `本题考查 **傅里叶逆变换**。

**计算**
\\(f(t) = \\frac{1}{2\\pi} \\int \\delta(\\omega-2)e^{j\\omega t} d\\omega = \\frac{1}{2\\pi} e^{j2t}\\)

**结论：**
填 \\(\\frac{1}{2\\pi}e^{j2t}\\)。`
  },
  63: {
    correctOptionId: "第一空：\\(u(n)\\)；第二空：\\(-u(-n-1)\\)",
    explanation: `本题考查 **Z 变换**。

**分析**
\\(X(z) = \\frac{z}{z-1}\\)
- **\\(|z|>1\\)**：因果，对应 \\(u(n)\\)。
- **\\(|z|<1\\)**：反因果，对应 \\(-u(-n-1)\\)。

**结论：**
填 \\(u(n)\\) 和 \\(-u(-n-1)\\)。`
  },
  64: {
    correctOptionId: "\\(\\delta(t)\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(\\delta(t) e^{-a(0)} = \\delta(t) \\cdot 1 = \\delta(t)\\)

**结论：**
填 \\(\\delta(t)\\)。`
  },
  65: {
    correctOptionId: "见解析",
    explanation: `本题考查 **Z 逆变换**。

**展开**
\\(X(z) = \\frac{-z}{z-1} + \\frac{z}{z-2}\\)

1. **\\(|z|>2\\)**：\\((2^n - 1)u(n)\\)
2. **\\(|z|<1\\)**：\\((1-2^n)u(-n-1)\\)
3. **\\(1<|z|<2\\)**：\\(-u(n) - 2^n u(-n-1)\\)`
  },
  66: {
    correctOptionId: "\\(\\sum |h(n)| < \\infty\\)",
    explanation: `本题考查 **稳定性**。

**结论**
绝对可和：
\\(\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty\\)

**结论：**
填 \\(\\sum_{n=-\\infty}^{\\infty} |h(n)| < \\infty\\)。`
  },
  67: {
    correctOptionId: "1",
    explanation: `本题考查 **筛选性质**。

**计算**
\\(Result = \\cos(0) = 1\\)

**结论：**
填 1。`
  },
  68: {
    correctOptionId: "4, 6, 2",
    explanation: `本题考查 **带宽变化**。

1. **\\(f(2t)\\)**：频带展宽 2 倍，\\(f_m=2k\\)，采样 \\(4k\\)。
2. **\\(f^3(t)\\)**：频域卷积，带宽相加，\\(f_m=3k\\)，采样 \\(6k\\)。
3. **\\(f(t)*f(2t)\\)**：频域相乘，带宽取交集，\\(f_m=1k\\)，采样 \\(2k\\)。

**结论：**
填 4, 6, 2。`
  },
  69: {
    correctOptionId: "\\(\\delta(t - \\frac{\\pi}{2})\\)",
    explanation: `本题考查 **取样性质**。

**计算**
\\(Coef = 1 - \\cos(\\frac{\\pi}{2}) = 1\\)
\\(Result = 1 \\cdot \\delta(t - \\frac{\\pi}{2})\\)

**结论：**
填 \\(\\delta(t - \\frac{\\pi}{2})\\)。`
  }
};
