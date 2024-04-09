import React from 'react'

export default function APISettings() {
  return (
    <div>
      <div className="my-[4%]">
        <h5 className="text-lg font-medium text-black">API Reference</h5>
        <p className="text-gray-700 text-sm">
          Automate your workflow using our API.
        </p>
      </div>
      <div>
        <h5 className="text-black text-sm">
          Learn how to integrate your apps with our API by visiting our{" "}
          <a>API Reference.</a>
        </h5>
        <h5>
          Learn how to integrate your apps with our API by visiting our API
          Reference. At a high level, you'll need to:
        </h5>
        <ol className="text-black text-sm mt-[1%] list-decimal flex gap-2 flex-col">
          <li>
            Authenticate with your app with our API and obtain a bearer token.
          </li>
          <li>Use the bearer token and request our list of targets.</li>
          <li>
            Use the bearer token and create a verification for your desired
            target.
          </li>
          <li>
            Use the bearer token and monitor the verification ID from step 3 for
            the verification code.
          </li>
        </ol>
      </div>
      <hr className="my-[4%]" />
      <div className="my-[4%]">
        <h5 className="text-lg font-medium text-black">API Reference</h5>
        <p className="text-gray-700 text-sm">
          Automate your workflow using our API.
        </p>
      </div>
    </div>
  );
}
