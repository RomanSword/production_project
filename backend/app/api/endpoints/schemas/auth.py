from pydantic import BaseModel
# from pydantic import BaseModel, model_validator


class AuthLoginForm(BaseModel):
    username: str
    password: str

    # @model_validator(mode='after')
    # def validate(self):
    #     profile = profile_repo.find(None, self.username)

    #     if not profile or not security_policy.check_password(self.password, profile.password):
    #         raise ValueError(errors['not_found'])

    #     return self


class AuthLogin(BaseModel):
    id: int
    firstname: str
