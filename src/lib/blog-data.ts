export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  author: string;
  authorRole: string;
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "complete-guide-to-hmi-touch-panels-industrial-automation",
    title: "Complete Guide to HMI Touch Panels in Industrial Automation",
    excerpt:
      "Human-Machine Interface (HMI) touch panels have revolutionized the way operators interact with industrial machinery. This comprehensive guide covers everything you need to know about selecting and integrating HMI touch panels.",
    category: "Industrial",
    tags: ["HMI", "touch panel", "industrial automation", "DWIN"],
    author: "Rajesh Kumar",
    authorRole: "Industrial Solutions Engineer",
    date: "2024-11-15",
    readTime: "8 min read",
    image: "/blog/hmi-touch-panel.jpg",
    featured: true,
    content: `
<p>Human-Machine Interface (HMI) touch panels are at the heart of modern industrial automation. They provide operators with an intuitive, visual interface to monitor processes, adjust parameters, and respond to system alerts — all in real time.</p>

<h2>What Is an HMI Touch Panel?</h2>
<p>An HMI (Human-Machine Interface) touch panel is a graphical display device that enables interaction between a human operator and a machine or process control system. Unlike traditional push-button panels, modern HMI touch screens offer dynamic, context-aware displays that can show live sensor data, historical trends, alarms, and control buttons — all on a single screen.</p>

<blockquote>
<p>The right HMI display doesn't just show data — it turns complex machine states into clear, actionable insights that reduce operator error and increase uptime.</p>
</blockquote>

<h2>Key Specifications to Consider</h2>
<ul>
  <li><strong>Screen Size:</strong> Typically ranges from 4.3" to 21.5" for industrial HMIs. Larger screens allow more widgets per view.</li>
  <li><strong>Resolution:</strong> Higher resolution (e.g., 1920×1080 FHD) delivers sharper graphics for complex dashboards.</li>
  <li><strong>Touch Technology:</strong> Capacitive touch for multi-touch gestures; resistive touch for glove-friendly operation.</li>
  <li><strong>Communication Protocols:</strong> UART, RS232, RS485, CAN Bus, Ethernet, Modbus, PROFINET.</li>
  <li><strong>Operating Temperature:</strong> Industrial-grade panels operate from -20°C to +70°C.</li>
</ul>

<h2>DWIN UART LCD Displays for HMI Applications</h2>
<p>DWIN Technology's UART LCD displays are purpose-built for HMI applications. The T5L series, for example, combines an internal processor with a rich graphic engine, enabling developers to create polished UIs without an external MCU. Key advantages include:</p>
<ul>
  <li>Built-in DGUS II graphic development environment</li>
  <li>Support for custom fonts, animated icons, and curve plotting</li>
  <li>Serial interface (UART) for easy MCU integration</li>
  <li>Low power consumption suitable for battery-powered devices</li>
</ul>

<h2>Application Industries</h2>
<p>HMI touch panels from Touch LCD Displays are deployed across a wide range of industries:</p>
<ul>
  <li><strong>Manufacturing:</strong> CNC machine control, PLC visualization, conveyor monitoring</li>
  <li><strong>Energy:</strong> Solar inverter displays, power grid monitoring stations</li>
  <li><strong>Building Automation:</strong> HVAC control panels, access control terminals</li>
  <li><strong>Food Processing:</strong> Mixer control, oven temperature dashboards, filling machine UI</li>
</ul>

<h2>Getting Started with Touch LCD Displays</h2>
<p>Contact our technical team to discuss your application requirements. We offer custom-size displays, sunlight-readable options, and OEM/ODM services for volume orders.</p>
    `,
  },
  {
    slug: "uart-lcd-integration-guide-for-embedded-developers",
    title: "UART LCD Integration Guide for Embedded Developers",
    excerpt:
      "Step-by-step guide to integrating DWIN UART LCD modules with popular microcontrollers including Arduino, STM32, and ESP32. Includes wiring diagrams, initialization code, and common troubleshooting tips.",
    category: "Tutorials",
    tags: ["UART", "LCD", "Arduino", "STM32", "ESP32", "embedded"],
    author: "Priya Sharma",
    authorRole: "Embedded Systems Lead",
    date: "2024-10-28",
    readTime: "12 min read",
    image: "/blog/uart-lcd-integration.jpg",
    content: `
<p>DWIN UART LCD displays offer one of the simplest integration paths for embedded developers. With just 3 wires (TX, RX, GND), you can add a full-color, touch-enabled display to any microcontroller project.</p>

<h2>Hardware Setup</h2>
<p>Connect the display's UART interface to your MCU:</p>
<ul>
  <li>LCD TX → MCU RX</li>
  <li>LCD RX → MCU TX</li>
  <li>GND → GND</li>
  <li>VCC → 3.3V or 5V (check datasheet for your model)</li>
</ul>

<blockquote>
<p>Always use a logic level shifter if your MCU operates at 3.3V and the display requires 5V UART logic levels to avoid damaging the display module.</p>
</blockquote>

<h2>Initialization with Arduino</h2>
<p>The following code demonstrates how to initialize a DWIN display and send a basic page-switch command:</p>

<h2>Common Troubleshooting</h2>
<ul>
  <li><strong>No response from display:</strong> Check baud rate (default is 115200), verify TX/RX aren't swapped.</li>
  <li><strong>Garbled text:</strong> Ensure the font library is properly loaded onto the SD card inside the display module.</li>
  <li><strong>Touch not responding:</strong> Verify the touch calibration file is present in the DWIN_SET folder.</li>
</ul>
    `,
  },
  {
    slug: "tft-vs-ips-display-which-is-right-for-your-application",
    title: "TFT vs IPS Display: Which Is Right for Your Application?",
    excerpt:
      "Choosing between TFT and IPS display technology can significantly impact your product's user experience. We break down the key differences in viewing angles, color accuracy, power consumption, and cost.",
    category: "Tutorials",
    tags: ["TFT", "IPS", "display technology", "comparison"],
    author: "Rajesh Kumar",
    authorRole: "Industrial Solutions Engineer",
    date: "2024-10-10",
    readTime: "6 min read",
    image: "/blog/tft-vs-ips.jpg",
    content: `
<p>When selecting a display for your next product, one of the most important early decisions is choosing between TFT (Thin-Film Transistor) and IPS (In-Plane Switching) technology. Both are active-matrix LCD technologies, but they differ significantly in performance characteristics.</p>

<h2>Viewing Angles</h2>
<p>This is where IPS displays shine. IPS panels maintain consistent color and brightness at wide viewing angles (up to 178°), while standard TFT panels can show color shift and brightness drop at angles beyond 90°.</p>

<h2>Color Accuracy</h2>
<p>IPS displays reproduce colors more accurately and consistently, making them preferred for medical imaging, design tools, and consumer electronics. TFT panels are adequate for status displays and dashboards where exact color fidelity is not critical.</p>

<blockquote>
<p>For medical-grade diagnostic displays, IPS is almost always the right choice due to superior color gamut and angle-independent accuracy.</p>
</blockquote>

<h2>Power Consumption</h2>
<p>Standard TFT displays generally consume less power than IPS at equivalent sizes, making TFT a better choice for battery-powered devices where display-on time is limited.</p>

<h2>Cost</h2>
<p>TFT modules are typically 20–40% less expensive than equivalent IPS panels, making them cost-effective for high-volume applications where premium image quality is not required.</p>

<h2>Our Recommendation</h2>
<ul>
  <li><strong>Choose TFT</strong> for: industrial status monitors, point-of-sale terminals, appliance UIs, battery-powered IoT devices</li>
  <li><strong>Choose IPS</strong> for: medical diagnostic equipment, automotive infotainment, consumer retail displays, any application requiring wide-angle viewing</li>
</ul>
    `,
  },
  {
    slug: "medical-grade-display-requirements-certification-guide",
    title: "Medical-Grade Display Requirements & Certification Guide",
    excerpt:
      "Designing a medical device? Your display choice is critical. This guide covers IEC 60601-1, FDA 510(k) considerations, brightness requirements for clinical environments, and touch technology selection for sterilizable surfaces.",
    category: "Medical",
    tags: ["medical", "IEC 60601", "FDA", "clinical display", "sterilizable"],
    author: "Dr. Ananya Mehta",
    authorRole: "Medical Device Consultant",
    date: "2024-09-20",
    readTime: "10 min read",
    image: "/blog/medical-display.jpg",
    content: `
<p>Displays used in medical devices face a unique set of regulatory, environmental, and performance requirements that far exceed those of commercial electronics. Whether you are designing a patient monitoring device, a surgical navigation system, or a diagnostic imaging workstation, choosing the right display module is critical to both product safety and regulatory approval.</p>

<h2>IEC 60601-1 Compliance</h2>
<p>The IEC 60601-1 standard governs the safety and essential performance of medical electrical equipment. Key display-related requirements include:</p>
<ul>
  <li>Dielectric strength and creepage distances</li>
  <li>EMC (electromagnetic compatibility) — CISPR 11 emissions, IEC 61000 immunity</li>
  <li>Operating temperature and humidity ranges</li>
  <li>Mechanical durability (vibration, drop, ingress protection)</li>
</ul>

<blockquote>
<p>Always verify with your display supplier that the module has been tested to IEC 60601-1 4th edition. Certification documentation is required for regulatory submissions.</p>
</blockquote>

<h2>Brightness & Contrast for Clinical Environments</h2>
<p>Clinical environments, especially operating theaters, have very high ambient light levels. Displays must achieve:</p>
<ul>
  <li>Minimum 350 cd/m² brightness for general clinical use</li>
  <li>500+ cd/m² for surgical or intensive care environments</li>
  <li>Contrast ratio ≥ 1000:1 for diagnostic imaging</li>
</ul>

<h2>Touch Technology for Sterilizable Surfaces</h2>
<p>Projected capacitive (PCAP) touch is preferred in medical devices because it supports stylus or gloved operation. For surfaces that require chemical disinfection:</p>
<ul>
  <li>Use chemically hardened glass (Gorilla Glass or equivalent)</li>
  <li>Ensure IP65 or IP67 sealing for fluid resistance</li>
  <li>Verify chemical resistance to isopropyl alcohol and quaternary ammonium compounds</li>
</ul>
    `,
  },
  {
    slug: "automotive-displays-canbus-integration-best-practices",
    title: "Automotive Displays: CAN Bus Integration Best Practices",
    excerpt:
      "Modern vehicles depend on dozens of displays for infotainment, cluster instrumentation, and ADAS interfaces. Learn how to integrate LCD displays with CAN Bus networks, handle EMI in automotive environments, and meet AEC-Q100 standards.",
    category: "Automotive",
    tags: ["automotive", "CAN Bus", "AEC-Q100", "ADAS", "infotainment"],
    author: "Vikram Singh",
    authorRole: "Automotive Electronics Specialist",
    date: "2024-09-05",
    readTime: "9 min read",
    image: "/blog/automotive-display.jpg",
    content: `
<p>The modern vehicle cabin has become a display-rich environment. From the digital instrument cluster to the center stack infotainment screen, rear-seat entertainment panels, and ADAS camera feeds, automotive LCD displays must perform reliably across extreme temperature ranges, high-vibration environments, and complex electromagnetic landscapes.</p>

<h2>AEC-Q100 Qualification</h2>
<p>Automotive-grade components are expected to meet AEC-Q100 (ICs) or AEC-Q200 (passive components) stress test qualification. For display modules used in automotive applications:</p>
<ul>
  <li>Operating temperature: -40°C to +85°C (Grade 1) or -40°C to +125°C (Grade 0)</li>
  <li>Humidity exposure: 85°C / 85% RH for 1000 hours</li>
  <li>Thermal cycling: -40°C ↔ +85°C, 1000 cycles</li>
</ul>

<blockquote>
<p>Non-automotive-grade displays may pass initial bench tests but fail within months in a vehicle cabin that can reach 80°C+ when parked in summer sun.</p>
</blockquote>

<h2>CAN Bus Integration</h2>
<p>The Controller Area Network (CAN) bus is the backbone communication protocol in most vehicles. To integrate an LCD display module with CAN:</p>
<ul>
  <li>Use a CAN transceiver IC (e.g., MCP2551, TJA1050) between the display MCU and the CAN bus</li>
  <li>Implement message filtering to respond only to relevant CAN IDs</li>
  <li>Handle bus-off recovery and error frames gracefully</li>
</ul>

<h2>EMI Considerations</h2>
<p>Automotive environments are electrically noisy. LCD displays must pass CISPR 25 radiated emissions and ISO 11452 immunity tests. Key design practices:</p>
<ul>
  <li>Shield the display cable with a grounded metal braid</li>
  <li>Use ferrite beads on power supply lines</li>
  <li>Route display cables away from ignition wires and motor drives</li>
</ul>
    `,
  },
  {
    slug: "ruggedized-displays-for-military-defense-applications",
    title: "Ruggedized Displays for Military & Defense Applications",
    excerpt:
      "Military displays must endure battlefield conditions — extreme shock, vibration, wide temperature ranges, EMI, and NVIS compatibility. Explore the MIL-SPEC standards, optical bonding techniques, and sunlight readability requirements for defense-grade LCD systems.",
    category: "Military",
    tags: ["military", "MIL-SPEC", "ruggedized", "NVIS", "sunlight readable"],
    author: "Col. (Retd.) Arun Nair",
    authorRole: "Defense Systems Advisor",
    date: "2024-08-18",
    readTime: "11 min read",
    image: "/blog/military-display.jpg",
    content: `
<p>Defense and military display systems represent the most demanding segment of the ruggedized electronics market. From portable soldier systems to vehicle-mounted command consoles and shipborne navigation displays, military-grade LCD modules must function reliably in conditions that would destroy commercial equipment.</p>

<h2>MIL-SPEC Standards for Display Systems</h2>
<p>Key MIL-STDs applicable to display systems include:</p>
<ul>
  <li><strong>MIL-STD-810H:</strong> Environmental engineering — shock (Method 516.8), vibration (Method 514.8), temperature (Method 501.7 / 502.7), dust, rain</li>
  <li><strong>MIL-STD-461G:</strong> EMC — conducted/radiated emissions and susceptibility</li>
  <li><strong>MIL-STD-3009:</strong> Night Vision Imaging System (NVIS) compatibility for cockpit and vehicle displays</li>
</ul>

<blockquote>
<p>NVIS compatibility is critical for aircraft cockpit displays — the display must not emit wavelengths that interfere with night-vision goggles (typically, no emission above 625nm in night mode).</p>
</blockquote>

<h2>Optical Bonding for Shock & Sunlight Readability</h2>
<p>Optical bonding fills the air gap between the display glass and the cover glass with optical-grade adhesive (OCA). This provides:</p>
<ul>
  <li>Elimination of internal reflections — improves contrast in sunlight by 4–6x</li>
  <li>Improved mechanical rigidity — critical for high-shock applications (100G+)</li>
  <li>Moisture ingress prevention at the display interface</li>
</ul>

<h2>Sunlight Readable Requirements</h2>
<p>Military field displays must be readable in direct sunlight (ambient illuminance 100,000 lux). This requires:</p>
<ul>
  <li>Display luminance: 1000–2000 cd/m² minimum (high-bright LED backlight)</li>
  <li>Anti-reflective (AR) or anti-glare (AG) coating on cover glass</li>
  <li>Optical bonding as described above</li>
</ul>
    `,
  },
  {
    slug: "selecting-the-right-display-size-for-your-iot-product",
    title: "Selecting the Right Display Size for Your IoT Product",
    excerpt:
      "With DWIN displays ranging from 1.3\" to 21.5\", choosing the optimal screen size for your IoT device involves balancing UI complexity, enclosure constraints, power budget, and user interaction distance.",
    category: "Tutorials",
    tags: ["IoT", "display size", "product design", "embedded UI"],
    author: "Priya Sharma",
    authorRole: "Embedded Systems Lead",
    date: "2024-08-01",
    readTime: "7 min read",
    image: "/blog/iot-display-size.jpg",
    content: `
<p>One of the most critical early decisions in IoT product design is selecting the right display size. Go too small and users struggle to read information; go too large and your enclosure becomes unwieldy, your BOM cost spikes, and your power budget is blown.</p>

<h2>The Decision Framework</h2>
<p>Consider the following factors when selecting display size:</p>
<ul>
  <li><strong>Information density:</strong> How many data points, controls, or status indicators need to be visible at once?</li>
  <li><strong>Viewing distance:</strong> Will the user be 30cm away (handheld) or 1m away (wall panel)?</li>
  <li><strong>Interaction type:</strong> Frequent, precision touch input favors larger screens; simple status readout favors smaller</li>
  <li><strong>Enclosure constraints:</strong> Available panel cutout area and depth</li>
  <li><strong>Power budget:</strong> Larger displays with higher-brightness backlights consume significantly more power</li>
</ul>

<h2>Size Recommendations by Application</h2>
<ul>
  <li><strong>1.3" – 2.4":</strong> Wearables, smart meters, small appliance status indicators</li>
  <li><strong>2.8" – 4.3":</strong> Handheld devices, smart home controllers, point-of-sale peripherals</li>
  <li><strong>5.0" – 7.0":</strong> Desktop HMI panels, medical bedside monitors, vehicle dashboards</li>
  <li><strong>8.0" – 10.1":</strong> Industrial control stations, kiosk entry panels, retail POS terminals</li>
  <li><strong>10.1" – 21.5":</strong> Factory floor workstations, building management consoles, public information displays</li>
</ul>

<blockquote>
<p>A common mistake is selecting a display size based on what looks good in a prototype on a workbench, rather than testing with real users in the actual use environment.</p>
</blockquote>
    `,
  },
  {
    slug: "industrial-display-protection-ip65-ip67-explained",
    title: "Industrial Display Protection Ratings: IP65, IP67, and IP69K Explained",
    excerpt:
      "What do IP ratings really mean for industrial displays? This guide explains the IEC 60529 ingress protection standard, breaks down each digit, and helps you choose the right sealing level for your application environment.",
    category: "Industrial",
    tags: ["IP rating", "IP65", "IP67", "IP69K", "ingress protection", "industrial"],
    author: "Rajesh Kumar",
    authorRole: "Industrial Solutions Engineer",
    date: "2024-07-12",
    readTime: "5 min read",
    image: "/blog/ip-rating-display.jpg",
    content: `
<p>If you have ever searched for an industrial display and seen terms like "IP65", "IP67", or "IP69K", you may have wondered what these codes actually mean and which level is right for your application. This guide breaks down the IEC 60529 Ingress Protection rating system as it applies to LCD display modules and HMI panels.</p>

<h2>Understanding the IP Code</h2>
<p>An IP rating consists of two digits:</p>
<ul>
  <li><strong>First digit (0–6):</strong> Protection against solid particles (dust)</li>
  <li><strong>Second digit (0–9K):</strong> Protection against liquids (water)</li>
</ul>

<h2>Common IP Ratings for Industrial Displays</h2>
<ul>
  <li><strong>IP54:</strong> Dust protected, splash resistant — light industrial, indoor use</li>
  <li><strong>IP65:</strong> Dust tight, protected against low-pressure water jets — most outdoor industrial panels</li>
  <li><strong>IP67:</strong> Dust tight, immersion up to 1m for 30 minutes — food processing, marine</li>
  <li><strong>IP68:</strong> Dust tight, continuous immersion — underwater instrumentation</li>
  <li><strong>IP69K:</strong> Dust tight, high-pressure/steam cleaning — food & beverage, pharmaceutical</li>
</ul>

<blockquote>
<p>IP69K is the highest standard for wash-down environments. If your display will be routinely cleaned with high-pressure steam jets, IP69K is the only acceptable rating.</p>
</blockquote>

<h2>Front Panel vs. Full Module Rating</h2>
<p>Be aware that a display may be rated IP65 at the front bezel only. The rear connector area and cable entries may require separate sealing measures such as IP-rated cable glands and sealed enclosure boxes.</p>
    `,
  },
];

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return blogPosts.find((post) => post.featured) || blogPosts[0];
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "All") return blogPosts;
  return blogPosts.filter((post) => post.category === category);
}

export function getRelatedPosts(slug: string, category: string, count = 3): BlogPost[] {
  return blogPosts
    .filter((post) => post.slug !== slug && post.category === category)
    .slice(0, count);
}

export const categories = ["All", "Industrial", "Automotive", "Medical", "Military", "Tutorials"];
