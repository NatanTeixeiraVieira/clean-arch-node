export abstract class Entity<Props = Object> {
  constructor(protected props: Props) {}

  toJSON(): Props {
    return {...this.props}
  }
}