import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BackgroundEffects } from "../../components/BackgroundEffects";
import { StatusBadge } from "../../components/StatusBadge";
import { projects } from "../../lib/data";

const siteUrl = "https://pirosmani.dev";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return {};

  const url = `${siteUrl}/projects/${project.slug}`;

  return {
    title: project.title,
    description: project.tagline,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${project.title} — ${project.tagline}`,
      description: project.summary,
      url,
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <>
      <BackgroundEffects />
      <main className="relative overflow-hidden">
        <nav className="fixed inset-x-0 top-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/75 px-5 py-4 font-mono text-xs uppercase text-zinc-400 backdrop-blur-md sm:px-8 lg:px-10">
          <Link href="/" className="text-white transition-colors hover:text-cyan-300">
            {"<-"} otar.p
          </Link>
          <Link
            href="/#projects"
            className="transition-colors hover:text-white"
          >
            all work
          </Link>
        </nav>

        <article className="pt-20">
          <header className="relative min-h-[78svh] overflow-hidden border-b border-white/10 px-5 pb-8 pt-10 sm:px-8 lg:px-10">
            <div className="hero-grid" aria-hidden />
            <div className="relative z-10 flex min-h-[calc(78svh-7rem)] flex-col justify-between">
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase text-zinc-500">
                <div className="flex items-center gap-3">
                  <StatusBadge status={project.status} />
                  <span>{project.year}</span>
                </div>
                <span>{project.stack.slice(0, 3).join(" / ")}</span>
              </div>

              <div>
                <h1 className="max-w-6xl text-7xl font-semibold leading-[0.9] text-white sm:text-8xl md:text-9xl">
                  {project.title}
                </h1>
                <p className="mt-8 max-w-3xl text-xl leading-8 text-zinc-300 md:text-2xl md:leading-9">
                  {project.tagline}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary border border-cyan-300 bg-cyan-300 px-4 py-2 text-sm font-semibold text-black"
                    >
                      Live site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ghost border border-white/15 px-4 py-2 text-sm font-semibold text-white"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </header>

          <CaseSection label="Summary" index="01">
            <p className="max-w-4xl text-2xl leading-9 text-white md:text-3xl md:leading-10">
              {project.summary}
            </p>
          </CaseSection>

          <CaseSection label="Problem" index="02">
            <p className="max-w-4xl text-base leading-8 text-zinc-400">
              {project.problem}
            </p>
          </CaseSection>

          <CaseSection label="Approach" index="03">
            <ol className="grid gap-px overflow-hidden border border-white/10 bg-white/10">
              {project.approach.map((line, index) => (
                <li
                  key={line}
                  className="grid gap-5 bg-black p-5 text-sm leading-7 text-zinc-300 md:grid-cols-[90px_1fr] md:p-6"
                >
                  <span className="font-mono text-xs text-cyan-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{line}</span>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection label="Highlights" index="04">
            <ul className="grid gap-3 md:grid-cols-2">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="min-h-28 border border-white/10 bg-black/40 p-5 text-lg font-medium leading-7 text-white"
                >
                  {highlight}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection label="Stack" index="05">
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="border border-white/10 px-3 py-2 font-mono text-xs text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </CaseSection>

          {project.slug === "dressfield" && <BogPaymentSection />}

          <div className="border-t border-white/10 px-5 py-10 sm:px-8 lg:px-10">
            <Link
              href="/#projects"
              className="font-mono text-xs uppercase text-zinc-500 transition-colors hover:text-cyan-300"
            >
              {"<-"} back to all work
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

function BogPaymentSection() {
  return (
    <CaseSection label="Payment Integration" index="06">
      <div className="space-y-12">

        {/* Intro */}
        <p className="max-w-3xl text-base leading-8 text-zinc-400">
          DressField uses Bank of Georgia&apos;s iPay REST API for payments. The
          integration handles OAuth2 token exchange, hosted-checkout session
          creation, and signed webhook verification — all behind a clean
          interface so the rest of the app never knows which provider is wired
          in.
        </p>

        {/* Flow diagram */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase text-zinc-500">
            Payment flow
          </p>
          <div className="overflow-x-auto">
            <div className="min-w-[560px] border border-white/10 bg-black/40 p-6 font-mono text-xs">
              <FlowStep
                num="01"
                label="User submits checkout"
                sub="POST /api/orders  →  order created, status: pending"
              />
              <FlowArrow />
              <FlowStep
                num="02"
                label="API fetches BOG access token"
                sub="POST oauth2.bog.ge  →  client_credentials grant  →  Bearer token"
                accent
              />
              <FlowArrow />
              <FlowStep
                num="03"
                label="Create BOG payment session"
                sub="POST api.bog.ge/payments/v1/ecommerce/orders  →  { id, redirect_url }"
              />
              <FlowArrow />
              <FlowStep
                num="04"
                label="User redirected to BOG hosted checkout"
                sub="Customer completes card payment on BOG's secure page"
              />
              <FlowArrow />
              <FlowStep
                num="05"
                label="BOG POSTs signed callback"
                sub="POST /api/payments/callback?key={orderKey}  ·  Callback-Signature header"
                accent
              />
              <FlowArrow />
              <FlowStep
                num="06"
                label="Verify RSA-SHA256 signature"
                sub="Reject if invalid — never trust unverified callback bodies"
              />
              <FlowArrow />
              <FlowStep
                num="07"
                label="Re-verify order status via GET"
                sub="GET /ecommerce/orders/{id}  →  confirm status: completed"
                accent
              />
              <FlowArrow />
              <FlowStep
                num="08"
                label="Order marked paid · customer redirected"
                sub="/order-confirmation  or  /order-failed"
              />
            </div>
          </div>
        </div>

        {/* Code snippets */}
        <div className="space-y-8">
          <p className="font-mono text-xs uppercase text-zinc-500">
            Key code
          </p>

          <CodeBlock
            label="Core/Interfaces/IPaymentService.cs"
            comment="// Interface lives in Core — Infrastructure is the only layer that knows about BOG"
            code={`public interface IPaymentService
{
    Task<PaymentSessionResult> CreateSessionAsync(
        int orderId, decimal amount,
        string orderKey, string description);

    Task<PaymentVerificationResult> VerifyCallbackAsync(
        string bogOrderId);
}

public record PaymentSessionResult(
    bool   Success,
    string? RedirectUrl,
    string? BogOrderId,
    string? ErrorMessage);

public record PaymentVerificationResult(
    bool   IsApproved,
    string BogOrderId,
    string? TransactionId,
    string Status);`}
          />

          <CodeBlock
            label="Infrastructure/Services/BogIPayService.cs — OAuth2 token"
            comment="// client_credentials grant — no user context, machine-to-machine"
            code={`private async Task<string> GetAccessTokenAsync()
{
    var credentials = Convert.ToBase64String(
        Encoding.UTF8.GetBytes($"{_clientId}:{_clientSecret}"));

    using var req = new HttpRequestMessage(
        HttpMethod.Post, _tokenUrl);
    req.Headers.Authorization =
        new AuthenticationHeaderValue("Basic", credentials);
    req.Content = new FormUrlEncodedContent(
        new Dictionary<string, string>
        {
            ["grant_type"] = "client_credentials"
        });

    var res = await _http.SendAsync(req);
    var raw = await res.Content.ReadAsStringAsync();

    if (!res.IsSuccessStatusCode)
        throw new InvalidOperationException(
            $"BOG token request failed ({res.StatusCode}): {raw}");

    using var doc = JsonDocument.Parse(raw);
    return doc.RootElement
              .GetProperty("access_token")
              .GetString()
           ?? throw new InvalidOperationException(
                  "BOG token response missing access_token.");
}`}
          />

          <CodeBlock
            label="API/Controllers/PaymentsController.cs — Webhook verification"
            comment="// BOG signs every callback with RSA-SHA256 — reject anything that doesn't verify"
            code={`private bool IsValidSignature(string rawBody, string? signature)
{
    if (string.IsNullOrWhiteSpace(signature)) return false;

    try
    {
        using var rsa = RSA.Create();
        rsa.ImportFromPem(_callbackPublicKeyPem);  // BOG's public key

        var payloadBytes   = Encoding.UTF8.GetBytes(rawBody);
        var signatureBytes = Convert.FromBase64String(signature.Trim());

        return rsa.VerifyData(
            payloadBytes,
            signatureBytes,
            HashAlgorithmName.SHA256,
            RSASignaturePadding.Pkcs1);
    }
    catch (Exception ex)
    {
        _logger.LogError(ex, "Signature verification failed.");
        return false;
    }
}

// Callback always returns 200 OK — BOG retries on any other status
[HttpPost("callback")]
public async Task<IActionResult> Callback([FromQuery] string? key)
{
    var rawBody   = await new StreamReader(Request.Body).ReadToEndAsync();
    var signature = Request.Headers["Callback-Signature"].FirstOrDefault();

    if (!IsValidSignature(rawBody, signature)) return Ok();  // silent reject

    // route to custom-order or regular-order handler
    if (key?.StartsWith("c-") == true)
        await _customOrders.HandlePaymentCallbackAsync(bogOrderId, key);
    else
        await _orders.HandlePaymentCallbackAsync(bogOrderId, key);

    return Ok();
}`}
          />
        </div>

        {/* Callouts */}
        <div>
          <p className="mb-4 font-mono text-xs uppercase text-zinc-500">
            Technical notes
          </p>
          <ul className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2">
            {[
              "Callback always returns 200 — BOG retries on non-200, so errors are logged and swallowed",
              "RSA-SHA256 signature verified before any database write — forged callbacks do nothing",
              "Order status re-verified via GET after callback — never trust callback body alone",
              "IPaymentService interface lets dev/test run against MockPaymentService without hitting BOG",
              "c- prefix on orderKey routes custom orders to a separate handler without an extra endpoint",
              "All credentials injected via IConfiguration — no secrets in source, ready for Azure Key Vault",
            ].map((note) => (
              <li
                key={note}
                className="bg-black/50 p-4 font-mono text-xs leading-6 text-zinc-400"
              >
                <span className="mr-2 text-cyan-300">→</span>
                {note}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </CaseSection>
  );
}

function FlowStep({
  num,
  label,
  sub,
  accent,
}: {
  num: string;
  label: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div className="flex gap-4">
      <span className={accent ? "text-cyan-300" : "text-zinc-600"}>{num}</span>
      <div>
        <div className={accent ? "text-cyan-200" : "text-zinc-200"}>{label}</div>
        <div className="mt-0.5 text-zinc-500">{sub}</div>
      </div>
    </div>
  );
}

function FlowArrow() {
  return (
    <div className="ml-6 py-1 text-zinc-700">│</div>
  );
}

function CodeBlock({
  label,
  comment,
  code,
}: {
  label: string;
  comment: string;
  code: string;
}) {
  return (
    <div className="overflow-hidden border border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <span className="font-mono text-[11px] text-zinc-400">{label}</span>
        <span className="font-mono text-[10px] uppercase text-cyan-300">C#</span>
      </div>
      <pre className="overflow-x-auto bg-black/60 p-5 font-mono text-[12px] leading-6 text-zinc-300">
        <span className="block text-zinc-600">{comment}</span>
        <span className="block mt-1 whitespace-pre">{code}</span>
      </pre>
    </div>
  );
}

function CaseSection({
  label,
  index,
  children,
}: {
  label: string;
  index: string;
  children: React.ReactNode;
}) {
  return (
    <section className="grid gap-8 border-b border-white/10 px-5 py-16 sm:px-8 md:grid-cols-[260px_minmax(0,1fr)] md:py-20 lg:px-10">
      <div className="font-mono text-xs uppercase text-zinc-500">
        <span className="text-cyan-300">{index}</span>
        <span className="ml-3">{label}</span>
      </div>
      <div>{children}</div>
    </section>
  );
}
