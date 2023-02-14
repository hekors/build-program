import { GenericComponentType } from '@/types/generic-type';

const WrappedContainer: React.FunctionComponent<GenericComponentType> = (
  { children, style, id, className },
  props: any,
) => {
  return (
    <div
      className={`w-fit h-fit ${className || ''}`}
      style={style}
      id={id}
      {...props}>
      {children}
    </div>
  );
};

export { WrappedContainer };
