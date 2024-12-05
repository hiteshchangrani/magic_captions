export default function PageHeaders ({
    h1text = 'Heading',
    h2text = 'Subheading'
}) {
    return (
        <section className="text-center mt-24 mb-8">
        <h1 className="text-3xl" style={{textShadow: '3px 3px 0 rgba(0, 0, 0, .4)'}}>{h1text}</h1>
        <h2 className="text-white/75">{h2text}</h2>
      </section>
    )
}