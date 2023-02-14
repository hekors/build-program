import { GenericComponentType } from '@/types/generic-type';

const Container: React.FunctionComponent<GenericComponentType> = (
  { children, style, id, className },
  props: any,
) => {
  return (
    <div className={className} style={style} id={id} {...props}>
      {children}
    </div>
  );
};

export default Container;
