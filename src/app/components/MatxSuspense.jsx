import { Suspense } from "react";
import { MatxLoading } from "app/components";

export default function MatxSuspense({ children }) {
  return <Suspense fallback={<MatxLoading />}>{children}</Suspense>;
}

//asdf dfsdsdfsdf dsfd sdfsd sdfsd sdfsd sds sdfsd sdfasdf sdfsdf