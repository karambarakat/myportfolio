import InnerLayout from '@/app/InnerLayout';
import QuickMessage from '@/components/QuickMessage';
import Link from 'next/link';

export default function E404() {
  return (
    <>
      <InnerLayout>
        <QuickMessage
          code="404"
          message="This page could not be found."
          action={
            <Link className="mt-6" href="/">
              go home
            </Link>
          }
        />
      </InnerLayout>
    </>
  );
}
