type MainHeadingProps = {
  children: React.ReactNode;
};

export default function MainHeading({ children }: MainHeadingProps) {
  return (
    <h1 className='text-3xl lg:text-6xl font-bold tracking-tight'>
      {children}
    </h1>
  );
}
