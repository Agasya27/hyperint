import { motion } from "framer-motion";
import { InlineTrustMoment } from "@/components/reviews/InlineTrustMoment";

/**
 * RitualSection - Design decisions traced to reference images:
 * 
 * FROM IMAGE 4 (Radiance - Directions Tab):
 * - "Directions for Use" heading
 * - Numbered steps (1-4) with circular badges
 * - Step content: "Cleanse face with...", "Add 1-2 drops...", etc.
 * - "Pro Tips" box with teal background and bullet points
 * 
 * FROM IMAGES 2-6 (Overall Radiance Page):
 * - Tab-based content organization adapted to scrollable sections
 * - Calm, ritual-based tone emphasizing self-care experience
 * - "Recent Reviews" sidebar concept adapted as adjacent testimonial
 * 
 * INNOVATION - Review Integration:
 * - Large "trust moment" testimonial placed alongside ritual steps
 * - Testimonial specifically mentions following "this exact ritual"
 * - Creates narrative connection between instructions and results
 * - Reviews become part of the self-care journey, not separate validation
 */

const ritualSteps = [
  {
    step: 1,
    title: "Cleanse",
    description: "Start with clean, slightly damp skin for optimal absorption.",
    time: "Evening ritual",
  },
  {
    step: 2,
    title: "Warm",
    description: "Add 3-4 drops to your palm. Warm between hands to activate the aromatherapy.",
    time: "2-3 seconds",
  },
  {
    step: 3,
    title: "Apply",
    description: "Gently press into skin using upward, circular motions. Focus on areas that need extra care.",
    time: "30 seconds",
  },
  {
    step: 4,
    title: "Breathe",
    description: "Cup hands over face and take 3 deep breaths. Let the bergamot calm your senses.",
    time: "Moment of peace",
  },
];

export const RitualSection = () => {
  return (
    <section className="py-20 md:py-28 bg-cream-warm/30 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* 
            Ritual Steps - FROM IMAGE 4 "Directions for Use"
            Numbered circles with step titles and descriptions
          */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-[0.2em] text-sage font-medium uppercase">
              Your Nightly Ritual
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mt-4 mb-8">
              How to Use
            </h2>

            <div className="space-y-6">
              {ritualSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-5"
                >
                  {/* Numbered circle - FROM IMAGE 4 */}
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-sage text-primary-foreground flex items-center justify-center font-serif font-semibold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-serif text-xl font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <span className="text-xs px-2 py-0.5 bg-rose-whisper text-accent-foreground rounded-full">
                        {item.time}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 
              Pro Tips box - DIRECTLY FROM IMAGE 4
              Green/teal background with bullet point tips
              Content matches original: moisturizer replacement, hormonal changes, etc.
            */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-10 bg-sage-light/50 rounded-2xl p-6 border border-sage/10"
            >
              <h4 className="font-medium text-sage mb-3">✨ Pro Tips</h4>
              <ul className="space-y-2 text-sm text-charcoal-soft">
                <li>• Can be used as a replacement for moisturizer</li>
                <li>• Start with 2 drops and increase quantity as required</li>
                <li>• Perfect for use during hormonal changes and life transitions</li>
                <li>• Suitable for morning and evening use</li>
              </ul>
            </motion.div>
          </motion.div>

          {/* 
            INNOVATION: Trust Moment - Contextual Review
            Instead of "Recent Reviews" sidebar (Images 2-6), 
            we place a large testimonial that directly references the ritual
            This connects instructions to real results
          */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-24"
          >
            <InlineTrustMoment
              quote="Following this exact ritual has transformed my evenings into a self-care moment I look forward to. After 2 months, my skin looks healthier and more radiant than ever. The aromatherapy is genuinely calming."
              author="Meera A."
              rating={5}
              highlight="Real results after consistent use"
            />
            
            {/* Additional mini testimonial - adapting "Recent Reviews" sidebar concept */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-6 bg-card rounded-2xl p-5 shadow-soft border border-border/50"
            >
              <p className="text-sm text-muted-foreground italic">
                &quot;The oil absorbs so quickly and leaves no greasy residue. I was skeptical about using oil but this changed everything.&quot;
              </p>
              <p className="text-xs text-muted-foreground mt-3">
                — Divya I. · Oily skin · Using for 6 months
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
