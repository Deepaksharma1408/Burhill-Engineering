import React from 'react';
import Link from 'next/link';
import { InsightArticle } from '@/data/content';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: InsightArticle;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <article className="group bg-white border border-slate-border rounded-lg p-6 flex flex-col justify-between hover:border-gold hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 ease-out animate-slide-up">
      <div className="space-y-4">
        {/* Meta Header */}
        <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
          <span className="px-2.5 py-1 bg-navy/5 text-navy border border-navy/10 rounded font-semibold group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
            {article.category}
          </span>
          <span className="flex items-center space-x-1">
            <Clock className="w-3.5 h-3.5 text-gold animate-pulse-subtle" />
            <span>{article.readTime}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-serif font-bold text-navy group-hover:text-gold transition-colors duration-200 leading-snug">
          <Link href={`/insights/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
          {article.excerpt}
        </p>
      </div>

      {/* Author & Read Action */}
      <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-navy text-gold flex items-center justify-center font-serif font-bold text-xs border border-gold/40 group-hover:scale-105 transition-transform">
            {article.author.split(' ').map(n => n[0]).join('')}
          </div>
          <div className="text-xs">
            <div className="font-semibold text-navy">{article.author}</div>
            <div className="text-[10px] text-slate-500 font-mono">{article.date}</div>
          </div>
        </div>

        <Link
          href={`/insights/${article.slug}`}
          className="text-xs font-mono font-semibold uppercase text-navy group-hover:text-gold flex items-center space-x-1.5 transition-colors"
        >
          <span>Read Paper</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </Link>
      </div>
    </article>
  );
};
