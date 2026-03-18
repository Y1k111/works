import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, ExternalLink, ArrowRight, Film, Wand2, Palette, PlayCircle } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: '品牌商业宣传片',
    description: '为知名运动品牌打造的年度视觉大片，结合动感剪辑与高级电影感调色，全网播放量破百万。',
    tags: ['Premiere Pro', 'DaVinci Resolve', '商业广告'],
    image: 'https://picsum.photos/seed/commercial/800/600',
    link: '#'
  },
  {
    id: 2,
    title: '独立剧情短片《微光》',
    description: '担任全片主剪辑与声音设计，通过细腻的镜头语言和节奏把控，入围多个独立电影节。',
    tags: ['Final Cut Pro', 'Audition', '剧情片'],
    image: 'https://picsum.photos/seed/shortfilm/800/600',
    link: '#'
  },
  {
    id: 3,
    title: '生活方式 Vlog 系列',
    description: '爆款社交媒体短视频系列，网感极佳的卡点剪辑与轻快节奏，单支视频平均点赞超10万。',
    tags: ['CapCut', 'After Effects', '短视频'],
    image: 'https://picsum.photos/seed/vlog/800/600',
    link: '#'
  },
  {
    id: 4,
    title: '独立乐队 MV',
    description: '运用大量视觉特效与创意转场，将音乐的情绪视觉化，打造极具冲击力的视听体验。',
    tags: ['Premiere Pro', 'After Effects', 'MV'],
    image: 'https://picsum.photos/seed/musicvideo/800/600',
    link: '#'
  }
];

const SKILLS = [
  { name: '剪辑与叙事', icon: <Film className="w-6 h-6 mb-4 text-neutral-600" />, description: '熟练掌握多机位剪辑、节奏把控与视觉叙事，善于从海量素材中提炼核心故事，让画面自己发声。' },
  { name: '色彩调配', icon: <Palette className="w-6 h-6 mb-4 text-neutral-600" />, description: '精通达芬奇 (DaVinci Resolve) 节点式调色，能够根据不同项目需求打造独特的视觉质感与电影级色调。' },
  { name: '特效与包装', icon: <Wand2 className="w-6 h-6 mb-4 text-neutral-600" />, description: '熟练运用 After Effects 进行二维/三维视觉包装、绿幕抠像、动态追踪及创意图形设计。' }
];

// 小红书自定义 SVG 图标
const XiaohongshuIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1024 1024" fill="currentColor" className={className} width="1em" height="1em">
    <path d="M685.248 296.768c-28.8-19.2-70.4-28.8-118.4-28.8-57.6 0-108.8 12.8-144 38.4-28.8 19.2-44.8 44.8-44.8 73.6 0 25.6 12.8 51.2 35.2 67.2 19.2 16 44.8 22.4 73.6 22.4 28.8 0 54.4-6.4 73.6-19.2 19.2-12.8 32-32 32-54.4 0-19.2-9.6-38.4-25.6-51.2-12.8-9.6-32-16-54.4-16-19.2 0-35.2 3.2-48 9.6-9.6 6.4-16 16-16 25.6 0 9.6 6.4 16 16 19.2 9.6 3.2 22.4 6.4 35.2 6.4 19.2 0 32-3.2 41.6-9.6 9.6-6.4 12.8-16 12.8-25.6 0-9.6-6.4-19.2-16-25.6-12.8-6.4-28.8-9.6-48-9.6-28.8 0-54.4 6.4-73.6 19.2-19.2 12.8-32 32-32 54.4 0 25.6 12.8 51.2 35.2 67.2 22.4 16 54.4 22.4 86.4 22.4 48 0 89.6-9.6 118.4-28.8 28.8-19.2 44.8-44.8 44.8-73.6 0-28.8-16-54.4-44.8-73.6zM512 0C229.248 0 0 229.248 0 512s229.248 512 512 512 512-229.248 512-512S794.752 0 512 0z m243.2 732.8c-12.8 12.8-32 19.2-54.4 19.2-22.4 0-41.6-6.4-54.4-19.2-12.8-12.8-19.2-32-19.2-54.4V521.6c0-22.4 6.4-41.6 19.2-54.4 12.8-12.8 32-19.2 54.4-19.2 22.4 0 41.6 6.4 54.4 19.2 12.8 12.8 19.2 32 19.2 54.4v156.8c0 22.4-6.4 41.6-19.2 54.4z m0-313.6c-12.8 12.8-32 19.2-54.4 19.2-22.4 0-41.6-6.4-54.4-19.2-12.8-12.8-19.2-32-19.2-54.4V208c0-22.4 6.4-41.6 19.2-54.4 12.8-12.8 32-19.2 54.4-19.2 22.4 0 41.6 6.4 54.4 19.2 12.8 12.8 19.2 32 19.2 54.4v156.8c0 22.4-6.4 41.6-19.2 54.4z" />
  </svg>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'work', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-neutral-900 selection:bg-neutral-900 selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/80 backdrop-blur-md border-b border-neutral-200/50">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <span className="font-serif text-xl font-bold tracking-tight">剪辑作品集.</span>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            {[
              { id: 'home', label: '首页' },
              { id: 'work', label: '精选作品' },
              { id: 'about', label: '关于我' },
              { id: 'contact', label: '联系方式' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`hover:text-neutral-900 transition-colors ${activeSection === item.id ? 'text-neutral-900' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <button 
            onClick={() => scrollTo('contact')}
            className="px-5 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors"
          >
            合作邀约
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="pt-40 pb-24 px-6 min-h-[90vh] flex flex-col justify-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h2 className="text-neutral-500 font-medium tracking-wide uppercase text-sm mb-6">Video Editor / Visual Creator</h2>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] tracking-tight mb-8 text-neutral-900">
              用镜头语言 <br className="hidden md:block" />
              讲述<span className="text-neutral-400 italic">动人</span>的故事。
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mb-12">
              我是一名专注于视觉表达的视频剪辑师。擅长商业宣传片、短视频及剧情向混剪，致力于将创意转化为引人入胜的视觉体验。
            </p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => scrollTo('work')}
                className="flex items-center gap-2 px-6 py-3 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all group"
              >
                查看作品
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <div className="flex items-center gap-4 text-neutral-500">
                <a href="#" className="flex items-center gap-2 hover:text-[#ff2442] transition-colors p-2 font-medium">
                  <XiaohongshuIcon className="w-5 h-5" />
                  <span className="text-sm">小红书主页</span>
                </a>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Skills/Services Section */}
        <section className="py-24 px-6 bg-white border-y border-neutral-100">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12">
              {SKILLS.map((skill, index) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-[#fafafa] border border-neutral-100"
                >
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
                  <p className="text-neutral-600 leading-relaxed text-sm">{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="py-32 px-6 max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="font-serif text-4xl md:text-5xl font-medium mb-6">精选作品</h2>
            <p className="text-neutral-600 max-w-xl text-lg">这里收录了我近期参与剪辑与制作的代表项目，涵盖商业广告、剧情短片与社交媒体内容。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index % 2 === 0 ? 0 : 0.2 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-3xl mb-6 bg-neutral-100 aspect-[16/9]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-xl">
                    <PlayCircle className="w-8 h-8 text-neutral-900 ml-1" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-600 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-neutral-600 transition-colors">{project.title}</h3>
                <p className="text-neutral-600 leading-relaxed">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 px-6 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-medium mb-8">关于我</h2>
              <div className="space-y-6 text-neutral-400 text-lg leading-relaxed">
                <p>
                  你好！我是一名充满热情的视频剪辑师与视觉创作者。我对影像的专注始于大学时期，从最初的兴趣记录，到如今能够独立把控商业项目的后期全流程。
                </p>
                <p>
                  我曾在影视制作公司和 MCN 机构担任核心剪辑师，参与过品牌广告、微电影以及千万级播放量的爆款短视频制作。我坚信，好的剪辑是隐形的，它能精准地引导观众的情绪，让故事更加深入人心。
                </p>
                <p>
                  在工作之外，我喜欢摄影、看电影，以及在小红书上分享我的剪辑心得、调色预设与生活日常。
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden relative z-10">
                <img 
                  src="https://picsum.photos/seed/editor/800/1000" 
                  alt="Portrait" 
                  className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-neutral-700 rounded-3xl z-0" />
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-neutral-500 font-medium tracking-wide uppercase text-sm mb-4">期待合作</h2>
            <h3 className="font-serif text-5xl md:text-7xl font-medium mb-8">联系我</h3>
            <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-2xl mx-auto">
              无论是商业项目合作、短视频代剪，还是有趣的创意探讨，我的收件箱随时为您敞开。欢迎通过邮件或小红书与我取得联系！
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5" />
                发送邮件
              </a>
              <a 
                href="#"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#ff2442] text-white rounded-full font-medium hover:bg-[#e61e38] transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
              >
                <XiaohongshuIcon className="w-5 h-5" />
                小红书私信
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-neutral-200 text-neutral-500 text-sm">
        <p>Designed & Built with React and Tailwind CSS</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} 视频剪辑作品集. All rights reserved.</p>
      </footer>
    </div>
  );
}
