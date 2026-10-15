import React from "react";
import { useState } from "react";
import {
  Heart,
  ShieldCheck,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  IndianRupee,
  UserRound,
  ReceiptText,
  HandHeart,
} from "lucide-react";
import "./Donate.css";
import Button from "../Button/Button";

const donationPurposes = [
  "General Welfare",
  "Food & Essentials",
  "Education Support",
  "Healthcare & Medical Camps",
  "Community Development",
];

const donationAmounts = [500, 1000, 2000, 5000];

const initialForm = {
  amount: 1000,
  customAmount: "",
  purpose: "General Welfare",
  frequency: "once",
  fullName: "",
  email: "",
  phone: "",
  address: "",
  needReceipt: false,
  pan: "",
  receiptAddress: "",
  anonymous: false,
};

export default function Donate() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [paymentMethod, setPaymentMethod] = useState("upi");

  const amount =
    form.amount === "custom" ? Number(form.customAmount) : Number(form.amount);

  const updateForm = (field, value) => {
    setForm((previous) => ({ ...previous, [field]: value }));
    setErrors((previous) => ({ ...previous, [field]: "" }));
  };

  const validateDetails = () => {
    const nextErrors = {};

    if (!form.anonymous && !form.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!/^[6-9]\d{9}$/.test(form.phone)) {
      nextErrors.phone = "Enter a valid 10-digit Indian mobile number.";
    }

    if (!Number.isFinite(amount) || amount < 1) {
      nextErrors.amount = "Enter a valid donation amount.";
    }

    if (
      form.needReceipt &&
      form.pan.trim() &&
      !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(form.pan.trim().toUpperCase())
    ) {
      nextErrors.pan = "Enter a valid PAN, or leave it blank.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const continueToReview = (event) => {
    event.preventDefault();

    if (step === 1) {
      if (!Number.isFinite(amount) || amount < 1) {
        setErrors({ amount: "Enter a valid donation amount." });
        return;
      }
      setErrors({});
      setStep(2);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    if (step === 2 && validateDetails()) {
      setStep(3);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const startOver = () => {
    setForm(initialForm);
    setErrors({});
    setPaymentMethod("upi");
    setStep(1);
  };

  const handleDemoPayment = () => {
    // UI demonstration only. No payment is processed.
    setStep(4);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="donate-page">
      <section className="donate-hero">
        <div className="donate-hero-inner">
          <span className="donate-eyebrow">
            <Heart size={15} fill="currentColor" />
            GIVE WITH PURPOSE
          </span>
          <Button variant2="backButton" href="/" arrow="2">
            Back
          </Button>

          <h1>
            Your kindness can
            <br />
            <span>change a life.</span>
          </h1>

          <p>
            Every contribution can help support meaningful community
            initiatives. Choose a cause and take a step towards positive change.
          </p>

          <div className="donate-trust">
            <span>
              <ShieldCheck size={17} /> Thoughtful giving
            </span>
            <span>
              <HandHeart size={17} /> Community first
            </span>
          </div>
        </div>
      </section>

      <div className="donate-layout">
        <section className="donate-main-card">
          {step !== 4 && (
            <div className="donate-progress">
              {[
                { number: 1, label: "Donation" },
                { number: 2, label: "Your details" },
                { number: 3, label: "Review" },
              ].map((item) => (
                <div
                  className={`donate-progress-step ${
                    step >= item.number ? "active" : ""
                  }`}
                  key={item.number}
                >
                  <span className="progress-number">
                    {step > item.number ? (
                      <CheckCircle2 size={18} />
                    ) : (
                      item.number
                    )}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          )}

          {step === 1 && (
            <form onSubmit={continueToReview}>
              <div className="donate-section-heading">
                <span className="donate-section-icon">
                  <HandHeart size={22} />
                </span>
                <div>
                  <h2>Make a donation</h2>
                  <p>Choose the amount and cause you want to support.</p>
                </div>
              </div>

              <div className="donate-field">
                <label>Donation frequency</label>
                <div className="donate-frequency">
                  <button
                    type="button"
                    className={form.frequency === "once" ? "selected" : ""}
                    onClick={() => updateForm("frequency", "once")}
                  >
                    One-time donation
                  </button>
                  <button
                    type="button"
                    className={form.frequency === "monthly" ? "selected" : ""}
                    onClick={() => updateForm("frequency", "monthly")}
                  >
                    Monthly
                  </button>
                </div>
                <p className="donate-helper">
                  Monthly donations are a preference in this demo; recurring
                  billing is not enabled.
                </p>
              </div>

              <div className="donate-field">
                <label htmlFor="donation-amount">Select donation amount</label>
                <div className="donate-amount-grid">
                  {donationAmounts.map((value) => (
                    <button
                      type="button"
                      key={value}
                      className={
                        form.amount === value
                          ? "amount-option selected"
                          : "amount-option"
                      }
                      onClick={() => {
                        updateForm("amount", value);
                        updateForm("customAmount", "");
                      }}
                    >
                      <IndianRupee size={15} />
                      {value.toLocaleString("en-IN")}
                    </button>
                  ))}

                  <button
                    type="button"
                    className={
                      form.amount === "custom"
                        ? "amount-option selected"
                        : "amount-option"
                    }
                    onClick={() => updateForm("amount", "custom")}
                  >
                    Other amount
                  </button>
                </div>

                {form.amount === "custom" && (
                  <div className="donate-custom-amount">
                    <span>₹</span>
                    <input
                      id="donation-amount"
                      type="number"
                      min="1"
                      step="1"
                      value={form.customAmount}
                      onChange={(event) =>
                        updateForm("customAmount", event.target.value)
                      }
                      placeholder="Enter your amount"
                      required
                    />
                  </div>
                )}

                {errors.amount && (
                  <p className="donate-error">{errors.amount}</p>
                )}
              </div>

              <div className="donate-field">
                <label htmlFor="donation-purpose">Donation purpose</label>
                <select
                  id="donation-purpose"
                  value={form.purpose}
                  onChange={(event) =>
                    updateForm("purpose", event.target.value)
                  }
                >
                  {donationPurposes.map((purpose) => (
                    <option key={purpose} value={purpose}>
                      {purpose}
                    </option>
                  ))}
                </select>
              </div>

              <div className="donate-highlight">
                <Heart size={20} />
                <p>
                  Your support helps community initiatives move forward. Thank
                  you for choosing to contribute.
                </p>
              </div>

              <button className="donate-primary-button" type="submit">
                Continue to your details <ArrowRight size={18} />
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={continueToReview}>
              <div className="donate-section-heading">
                <span className="donate-section-icon">
                  <UserRound size={22} />
                </span>
                <div>
                  <h2>Your information</h2>
                  <p>Enter your details for donation communication.</p>
                </div>
              </div>

              <label className="donate-checkbox">
                <input
                  type="checkbox"
                  checked={form.anonymous}
                  onChange={(event) =>
                    updateForm("anonymous", event.target.checked)
                  }
                />
                <span>Make my name anonymous in public displays</span>
              </label>

              {!form.anonymous && (
                <div className="donate-field">
                  <label htmlFor="donor-name">Full name *</label>
                  <input
                    id="donor-name"
                    value={form.fullName}
                    onChange={(event) =>
                      updateForm("fullName", event.target.value)
                    }
                    placeholder="Enter your full name"
                    autoComplete="name"
                  />
                  {errors.fullName && (
                    <p className="donate-error">{errors.fullName}</p>
                  )}
                </div>
              )}

              <div className="donate-two-columns">
                <div className="donate-field">
                  <label htmlFor="donor-email">Email address *</label>
                  <input
                    id="donor-email"
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      updateForm("email", event.target.value)
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                  {errors.email && (
                    <p className="donate-error">{errors.email}</p>
                  )}
                </div>

                <div className="donate-field">
                  <label htmlFor="donor-phone">Mobile number *</label>
                  <input
                    id="donor-phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.phone}
                    onChange={(event) =>
                      updateForm(
                        "phone",
                        event.target.value.replace(/\D/g, "").slice(0, 10),
                      )
                    }
                    placeholder="10-digit mobile"
                    autoComplete="tel-national"
                    required
                  />
                  {errors.phone && (
                    <p className="donate-error">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="donate-field">
                <label htmlFor="donor-address">
                  Address <span className="optional">(optional)</span>
                </label>
                <textarea
                  id="donor-address"
                  rows="2"
                  value={form.address}
                  onChange={(event) =>
                    updateForm("address", event.target.value)
                  }
                  placeholder="Enter your address"
                  autoComplete="street-address"
                />
              </div>

              <div className="donate-receipt-box">
                <label className="donate-checkbox">
                  <input
                    type="checkbox"
                    checked={form.needReceipt}
                    onChange={(event) =>
                      updateForm("needReceipt", event.target.checked)
                    }
                  />
                  <span>
                    <ReceiptText size={17} />I need a donation receipt
                  </span>
                </label>

                {form.needReceipt && (
                  <div className="donate-receipt-fields">
                    <p>
                      Add receipt details if required. Tax-benefit eligibility
                      depends on the organization and applicable rules.
                    </p>

                    <div className="donate-field">
                      <label htmlFor="donor-pan">
                        PAN <span className="optional">(optional)</span>
                      </label>
                      <input
                        id="donor-pan"
                        value={form.pan}
                        onChange={(event) =>
                          updateForm(
                            "pan",
                            event.target.value.toUpperCase().slice(0, 10),
                          )
                        }
                        placeholder="ABCDE1234F"
                        maxLength={10}
                        autoComplete="off"
                      />
                      {errors.pan && (
                        <p className="donate-error">{errors.pan}</p>
                      )}
                    </div>

                    <div className="donate-field">
                      <label htmlFor="receipt-address">
                        Receipt address{" "}
                        <span className="optional">(optional)</span>
                      </label>
                      <textarea
                        id="receipt-address"
                        rows="2"
                        value={form.receiptAddress}
                        onChange={(event) =>
                          updateForm("receiptAddress", event.target.value)
                        }
                        placeholder="Address to appear on the receipt"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="donate-form-actions">
                <button
                  type="button"
                  className="donate-back-button"
                  onClick={() => setStep(1)}
                >
                  <ArrowLeft size={17} /> Back
                </button>
                <button className="donate-primary-button" type="submit">
                  Review donation <ArrowRight size={18} />
                </button>
              </div>
            </form>
          )}

          {step === 3 && (
            <div>
              <div className="donate-section-heading">
                <span className="donate-section-icon">
                  <ShieldCheck size={22} />
                </span>
                <div>
                  <h2>Review your donation</h2>
                  <p>Check your information before proceeding.</p>
                </div>
              </div>

              <div className="donate-review-box">
                <div className="donate-review-row">
                  <span>Donation amount</span>
                  <strong>₹{amount.toLocaleString("en-IN")}</strong>
                </div>
                <div className="donate-review-row">
                  <span>Frequency</span>
                  <strong>
                    {form.frequency === "once" ? "One-time" : "Monthly"}
                  </strong>
                </div>
                <div className="donate-review-row">
                  <span>Purpose</span>
                  <strong>{form.purpose}</strong>
                </div>
                <div className="donate-review-row">
                  <span>Donor</span>
                  <strong>
                    {form.anonymous ? "Anonymous" : form.fullName}
                  </strong>
                </div>
                <div className="donate-review-row">
                  <span>Email</span>
                  <strong>{form.email}</strong>
                </div>
                <div className="donate-review-row">
                  <span>Mobile</span>
                  <strong>{form.phone}</strong>
                </div>
                <div className="donate-review-row">
                  <span>Receipt requested</span>
                  <strong>{form.needReceipt ? "Yes" : "No"}</strong>
                </div>
              </div>

              <h3 className="donate-payment-title">Choose payment method</h3>

              <div className="donate-payment-options">
                {[
                  { id: "upi", label: "UPI", detail: "GPay, PhonePe, BHIM" },
                  { id: "card", label: "Card", detail: "Debit or credit card" },
                  {
                    id: "netbanking",
                    label: "Net banking",
                    detail: "Bank transfer",
                  },
                ].map((method) => (
                  <button
                    type="button"
                    key={method.id}
                    className={
                      paymentMethod === method.id
                        ? "donate-payment-option selected"
                        : "donate-payment-option"
                    }
                    onClick={() => setPaymentMethod(method.id)}
                  >
                    <span className="donate-radio-dot" />
                    <span>
                      <strong>{method.label}</strong>
                      <small>{method.detail}</small>
                    </span>
                  </button>
                ))}
              </div>

              <p className="donate-demo-note">
                Demo only: this selection does not initiate a real payment.
                Connect a payment gateway before accepting donations.
              </p>

              <div className="donate-form-actions">
                <button
                  type="button"
                  className="donate-back-button"
                  onClick={() => setStep(2)}
                >
                  <ArrowLeft size={17} /> Edit details
                </button>
                <button
                  type="button"
                  className="donate-primary-button"
                  onClick={handleDemoPayment}
                >
                  Continue to payment <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="donate-success">
              <span className="donate-success-icon">
                <CheckCircle2 size={48} />
              </span>
              <span className="donate-eyebrow">DEMO COMPLETE</span>
              <h2>Thank you for your kindness!</h2>
              <p>
                Your donation details have been reviewed. No payment was
                processed, and no official receipt has been generated.
              </p>

              <div className="donate-success-amount">
                <span>Donation amount</span>
                <strong>₹{amount.toLocaleString("en-IN")}</strong>
                <small>{form.purpose}</small>
              </div>

              <button
                type="button"
                className="donate-primary-button"
                onClick={startOver}
              >
                Make another donation <Heart size={17} />
              </button>
            </div>
          )}
        </section>

        <aside className="donate-sidebar">
          <div className="donate-summary-card">
            <span className="donate-sidebar-label">YOUR CONTRIBUTION</span>
            <h3>Every contribution matters.</h3>
            <p>
              Your support can help community welfare initiatives reach more
              people. Choose the purpose that matters to you.
            </p>

            <div className="donate-summary-divider" />

            <div className="donate-summary-row">
              <span>Donation</span>
              <strong>
                ₹
                {(Number.isFinite(amount) ? amount : 0).toLocaleString("en-IN")}
              </strong>
            </div>
            <div className="donate-summary-row">
              <span>Purpose</span>
              <strong>{form.purpose}</strong>
            </div>
            <div className="donate-summary-row">
              <span>Frequency</span>
              <strong>
                {form.frequency === "once" ? "One-time" : "Monthly"}
              </strong>
            </div>

            <div className="donate-summary-total">
              <span>Total</span>
              <strong>
                ₹
                {(Number.isFinite(amount) ? amount : 0).toLocaleString("en-IN")}
              </strong>
            </div>

            <div className="donate-security">
              <ShieldCheck size={20} />
              <span>
                <strong>Give with confidence</strong>
                <small>
                  Payment security depends on the integrated gateway.
                </small>
              </span>
            </div>
          </div>

          <div className="donate-help-card">
            <span className="donate-help-icon">
              <Heart size={19} />
            </span>
            <div>
              <h4>Need help donating?</h4>
              <p>
                Add your organization's verified contact details here so donors
                can ask questions before contributing.
              </p>
            </div>
          </div>

          <p className="donate-privacy-note">
            Please only provide information needed to complete your donation.
            Personal details should be handled securely.
          </p>
        </aside>
      </div>
    </main>
  );
}
