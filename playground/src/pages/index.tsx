import { Previewer } from '../components/previewer';
import { TemplateSelector } from '../components/template-selector';
import { siteName } from '../const';
import { useTemplate } from '../hooks/use-template';
import { Helmet } from 'react-helmet-async';

const IndexPage = () => {
  const [template] = useTemplate();
  return (
    <div className="md:flex h-full">
      <Helmet>
        <title>
          {template
            ? `${template} - ${siteName} Playground`
            : `${siteName} Playground`}
        </title>
      </Helmet>
      <div className="md:w-[400px] md:border-r p-6">
        <TemplateSelector />
      </div>
      <div className="md:flex-1">
        {template ? (
          <Previewer template={template} />
        ) : (
          <div className="md:h-full flex md:items-center justify-center">
            Click a template in the list to preview
          </div>
        )}
      </div>
    </div>
  );
};

export default IndexPage;
