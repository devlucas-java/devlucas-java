interface TechBadgeProps {
  tech: string;
  active?: boolean;
  onClick?: () => void;
  clickable?: boolean;
}

const techColors: Record<string, string> = {
  Java: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  'Spring Boot': 'bg-green-500/10 text-green-400 border-green-500/20',
  React: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  'React Native': 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  TypeScript: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'Node.js': 'bg-green-600/10 text-green-500 border-green-600/20',
  Python: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  YugabyteDB: 'bg-blue-500/10 text-blue-300 border-blue-500/20',
  PostgreSQL: 'bg-blue-600/10 text-blue-400 border-blue-600/20',
  MongoDB: 'bg-green-500/10 text-green-400 border-green-500/20',
  Docker: 'bg-blue-400/10 text-blue-300 border-blue-400/20',
  Kubernetes: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Redis: 'bg-red-500/10 text-red-400 border-red-500/20',
  AWS: 'bg-orange-400/10 text-orange-300 border-orange-400/20',
  'AWS S3': 'bg-orange-400/10 text-orange-300 border-orange-400/20',
  Firebase: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  Kafka: 'bg-gray-500/10 text-gray-300 border-gray-500/20',
  GraphQL: 'bg-pink-500/10 text-pink-400 border-pink-500/20',
  FastAPI: 'bg-teal-500/10 text-teal-400 border-teal-500/20',
  Django: 'bg-green-700/10 text-green-400 border-green-700/20',
  Celery: 'bg-lime-500/10 text-lime-400 border-lime-500/20',
  Go: 'bg-cyan-600/10 text-cyan-300 border-cyan-600/20',
  Gin: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  GORM: 'bg-sky-500/10 text-sky-400 border-sky-500/20',
  gRPC: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  Elasticsearch: 'bg-yellow-600/10 text-yellow-300 border-yellow-600/20',
  CDC: 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20',
  Kibana: 'bg-pink-600/10 text-pink-300 border-pink-600/20',
  'Vue.js': 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  Laravel: 'bg-red-600/10 text-red-400 border-red-600/20',
  MySQL: 'bg-blue-700/10 text-blue-300 border-blue-700/20',
  JWT: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  WebSocket: 'bg-indigo-400/10 text-indigo-300 border-indigo-400/20',
  Stripe: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'BTCPay': 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  Testcontainers: 'bg-teal-600/10 text-teal-300 border-teal-600/20',
  Prometheus: 'bg-orange-600/10 text-orange-300 border-orange-600/20',
  Cassandra: 'bg-blue-300/10 text-blue-200 border-blue-300/20',
  MinIO: 'bg-red-500/10 text-red-400 border-red-500/20',
  Nginx: 'bg-green-600/10 text-green-400 border-green-600/20',
  MapStruct: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Swagger: 'bg-green-400/10 text-green-300 border-green-400/20',
  'Backblaze B2': 'bg-red-400/10 text-red-300 border-red-400/20',
};

export default function TechBadge({ tech, active, onClick, clickable }: TechBadgeProps) {
  const baseColor = techColors[tech] ?? 'bg-violet-500/10 text-violet-400 border-violet-500/20';

  const activeClass = active
    ? 'ring-2 ring-violet-400 scale-105'
    : '';

  const hoverClass = clickable
    ? 'cursor-pointer hover:scale-105 hover:ring-1 hover:ring-violet-400/50'
    : '';

  return (
    <span
      onClick={onClick}
      className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border transition-all select-none ${baseColor} ${activeClass} ${hoverClass}`}
    >
      {tech}
    </span>
  );
}
