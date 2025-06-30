export const getCategoryStyle = (category: string) => {
  const styles = {
    web: 'bg-blue-600/20 text-blue-300 border border-blue-600/30',
    mobile: 'bg-green-600/20 text-green-300 border border-green-600/30',
    desktop: 'bg-purple-600/20 text-purple-300 border border-purple-600/30',
    game: 'bg-red-600/20 text-red-300 border border-red-600/30',
    library: 'bg-yellow-600/20 text-yellow-300 border border-yellow-600/30',
    ai: 'bg-pink-600/20 text-pink-300 border border-pink-600/30',
    other: 'bg-slate-600/20 text-slate-300 border border-slate-600/30'
  };
  return styles[category as keyof typeof styles] || styles.other;
};


