import { Header } from '../../components/header';
import { siteName } from '../../const';
import { useRequest } from 'ahooks';
import { Spin } from 'antd';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router';

export default () => {
  const params = useParams<{ id: string }>();
  const { data: md, loading } = useRequest(
    async () => {
      const res = await import(`../../../../docs/${params.id}.md`);
      return res.html;
    },
    {
      refreshDeps: [params.id],
    },
  );

  return (
    <div className="p-4 max-w-[700px] mx-auto">
      <Helmet>
        <title>{`${params.id} - ${siteName} Docs`}</title>
      </Helmet>
      <Header />
      {loading ? (
        <Spin className="flex items-center justify-center" />
      ) : (
        <div
          className="prose prose-sm"
          dangerouslySetInnerHTML={{ __html: md }}
        />
      )}
    </div>
  );
};
