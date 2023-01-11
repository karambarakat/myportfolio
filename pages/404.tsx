import InnerLayout from '@/app/InnerLayout'
import Separator from '@/components/Separator'

export default function E404() {
  return (
    <>
      <InnerLayout>
        <div
          style={{
            display: 'flex',
            fontSize: '1.25rem',
            lineHeight: '1.75rem',
            gap: '1rem',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}
        >
          <div>404</div>
          <Separator size={{ height: '48px' }} />
          <div>This page could not be found.</div>
        </div>
      </InnerLayout>
      {/* </Layout> */}
    </>
  )
}
