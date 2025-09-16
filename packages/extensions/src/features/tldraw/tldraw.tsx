import { FC } from 'react';
import { AssetRecordType, createShapeId, Editor, Tldraw } from 'tldraw';

export const App: FC<{ dataUrl: string; width: number; height: number }> = ({
  dataUrl,
  width,
  height,
}) => {
  const onMount = (editor: Editor) => {
    editor.user.updateUserPreferences({ colorScheme: 'system' });
    const assetName = 'qa-png';
    const assetId = AssetRecordType.createId();
    editor.createAssets([
      {
        type: 'image',
        typeName: 'asset',
        id: assetId,
        props: {
          src: dataUrl,
          isAnimated: false,
          w: width,
          h: height,
          mimeType: 'image/png',
          name: assetName,
        },
        meta: {},
      },
    ]);

    const shapeId = createShapeId();

    editor.createShape({
      id: shapeId,
      type: 'image',
      x: 0,
      y: 0,
      props: {
        assetId,
        w: width,
        h: height,
      },
    });

    editor.zoomToFit();
  };

  return <Tldraw onMount={onMount} />;
};
