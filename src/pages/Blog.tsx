import React, { useState } from 'react';
import { getBlogData, BlogPost } from '../components/blogData';
import { Search, Tag, Calendar, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const FadeInSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity transition-transform duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
    >
      {children}
    </div>
  );
};

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedPost, setExpandedPost] = useState<string | null>(null);

  const categories = ['All', 'Technical', 'Tutorial', 'FAQ', 'Best Practices'];
  const blogData = getBlogData(t);

  const filteredPosts = blogData.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Technical': return 'from-blue-500 to-cyan-500';
      case 'Tutorial': return 'from-green-500 to-emerald-500';
      case 'FAQ': return 'from-purple-500 to-pink-500';
      case 'Best Practices': return 'from-orange-500 to-red-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-100 to-white dark:from-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-br from-pink-100 to-orange-100 dark:from-pink-900 dark:to-orange-900 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-12">
            <div className="inline-block p-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-900 dark:to-purple-900 rounded-full mb-6">
              <div className="bg-white dark:bg-slate-900 px-5 py-1.5 rounded-full">
                <span className="text-xs font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                  {t('blog.badge')}
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 dark:text-white mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              {t('blog.description')}
            </p>
          </div>
        </FadeInSection>

        {/* Search & Filter */}
        <FadeInSection>
          <div className="mb-12">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search articles, questions, tags..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-400 outline-none text-slate-800 dark:text-white transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Posts Count */}
        <div className="mb-6 text-slate-600 dark:text-slate-400">
          {filteredPosts.length} {filteredPosts.length === 1 ? 'article' : 'articles'} found
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {filteredPosts.map((post) => (
            <FadeInSection key={post.id}>
              <article className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                {/* Post Header */}
                <div className="p-4 sm:p-6 flex flex-col flex-grow">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className={`inline-block px-2 sm:px-3 py-1 rounded-lg bg-gradient-to-r ${getCategoryColor(post.category)} text-white text-xs font-semibold`}>
                      {post.category}
                    </div>
                    <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1 sm:gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={14} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-slate-800 dark:text-white mb-2 sm:mb-3 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 mb-3 sm:mb-4 italic flex-grow">
                    Q: {post.question}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {post.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center gap-1 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium"
                      >
                        <Tag size={10} />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Toggle Button */}
                  <button
                    onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold hover:gap-3 transition-all duration-300 text-sm sm:text-base mt-auto"
                  >
                    {expandedPost === post.id ? (
                      <>
                        <span>Hide Answer</span>
                        <ChevronUp size={18} />
                      </>
                    ) : (
                      <>
                        <span>Read Full Answer</span>
                        <ChevronDown size={18} />
                      </>
                    )}
                  </button>
                </div>

                {/* Expandable Answer */}
                {expandedPost === post.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 animate-fade-in">
                    <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
                      <div className="prose prose-slate dark:prose-invert max-w-none">
                        {post.answer.split('\n\n').map((paragraph, index) => (
                          <p key={index} className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </FadeInSection>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-slate-600 dark:text-slate-400">
              No articles found matching your search criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
