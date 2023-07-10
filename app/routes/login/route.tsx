import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { InputField } from "./InputField";
import { ValidatedForm, validationError } from "remix-validated-form";
import { withZod } from "@remix-validated-form/with-zod";
import { z } from "zod";

export const action = async ({ request }: ActionArgs) => {
  const form = await request.formData();
  const result = await validator.validate(form);

  if (result.error) {
    return validationError(result.error);
  }

  return redirect("/login");
};

export const validator = withZod(
  z.object({
    email: z.string().email("Must be a valid email"),
    password: z.string().min(8, { message: "Should be at least 8 characters" }),
  }),
);

export default function Login() {
  return (
    <>
      <ValidatedForm validator={validator} method="post">
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div>
            <InputField type="email" name="email" label="Email" />
          </div>
          <div>
            <InputField type="password" name="password" label="Password" />
          </div>
          <div>
            <button>Login</button>
          </div>
        </div>
      </ValidatedForm>
    </>
  );
}
